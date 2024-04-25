import axios from "axios";
import { useState } from "react";
import "../pages/Layout.css";



function ImageUp(){
        const [file, setFile] = useState<File | undefined>();
        const handlefile = (e) => {
                setFile(e.target.file[0])
        }
        const handleUpload =()=>{
                if (file) {
                    const formdata = new FormData();
                    formdata.append('image', file);
                    axios.post('http://localhost:8081/admin', formdata) // Pass formdata as the second argument
                        .then(res => console.log(res))
                        .catch(err => console.log(err));
                } else {
                    console.log("No file selected");
                }
            }
            
        return (
        <div className="main-content">
                <input type="file" onChange={handlefile}/>
                <button onClick={handleUpload}>Upload</button>
        </div>
        );
}
export default ImageUp;