import axios from "axios";
import { useState } from "react";
import './admin.css';
import Sidebar from "./sidebar";
import { useNavigate, useParams } from "react-router-dom";


function Update() {
    const[newsTitle, setNews] = useState("");
    const[information, setInformation] = useState("");
    const[bibleverse, setBibleVerse] = useState("");
    const {id} = useParams();
    const navigate =useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        
        axios.put('http://localhost:8081/update/'+id, { newsTitle, information, bibleverse })
            .then(res => {
                console.log(res);
                navigate('/admin');
            }).catch(err => console.log(err));
    }
    

    return (
        <>
            <Sidebar />
            <div className="admin">
                <div className="admincard">
                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <h2>Update Newsletter</h2>
                            <div className="Title">
                                <label htmlFor="">News Title:</label>
                                <input type="text" 
                                placeholder="Enter News Letter" 
                                className="form-control" 
                                value={newsTitle}
                                onChange={(e) => setNews(e.target.value)}
                                style={{width: "80%", height:"px", marginLeft:"30px"}}
                                />
                            </div>
                            <div className="NewsBody">
                                <label htmlFor="">Information:</label>
                                <textarea placeholder="Enter news Information" className="form-control"
                                value={information}
                                onChange={(e) => setInformation(e.target.value)}
                                style={{width: "95%", height:"150px", marginLeft:"30px"}}
                                ></textarea>
                            </div>
                            <div className="BibleVerse">
                                <label htmlFor="">Bible Verse:</label>
                                <input type="text" placeholder="Enter news Information" className="form-control"
                                value={bibleverse}
                                onChange={(e) => setBibleVerse(e.target.value)}
                                />
                            </div>
                            <div><button>Update</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Update;
