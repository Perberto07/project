import { Link } from "react-router-dom";
import "./admin.css";
import axios from "axios";

const AdminCard = ({ newsletter }) => {
    const { newsTitle, information, bibleverse } = newsletter;

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8081/delete/' + id)
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="newscontainer">
                <div className="newscard">
                    <div className="newsdetails">
                        <h3 className="Title">{newsTitle}</h3>
                        <hr className="line" />
                        <p>{information}</p>
                        <hr className="line" />
                        <h5>{bibleverse}</h5>
                        <hr className="line" />
                        <Link to={`/admin/update/${newsletter.ID}`}><button className="upbut">Update</button></Link>
                        <button className="delbut" onClick={e => handleDelete(newsletter.ID)}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminCard;
