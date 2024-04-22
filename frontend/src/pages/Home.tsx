import "./Page.css";
import CLSFImage from '../images/CLSF.jpg';


import Chitchat from "../Chitchat";

function Home(){
    return(
        <>


        <div  className="Home">

            <div className="IMG ">
                <img src={CLSFImage} alt="CLSF" className="CLSF" />
            
            </div>
            
            <div className="text-header">
                    <h1>Welcome to CLSF</h1>
                </div>
            <div>
                <p className="text-body">Christ, the Living Stone Fellowship (CLSF) is a Christ-centered church, encouraging one another as one family, transforming individuals, communities and nations through the proclamation of the Gospel of the Kingdom of God.</p>
            </div>

        </div> 

        <div className="chatbot-container"><Chitchat/></div>

        </>
    )
}
export default Home;