import "./newscard.css";

const Newscard = ({ newsletter }) => {
    const { newsTitle, information, bibleverse } = newsletter;
    return (
        <div className="newscontainer">
            <div className="newscard">
                <div className="newsdetails">
                    <h3>{newsTitle}</h3>
                    <hr className="line" />
                    <p className="phrases">{information}</p>
                    <hr className="line" />
                    <h6>{bibleverse}</h6>
                    
                </div>
            </div>
        </div>
    )
}

export default Newscard