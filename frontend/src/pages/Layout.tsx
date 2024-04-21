import { Outlet, Link } from "react-router-dom";
import "./Layout.css"; // Import the CSS file
import Header from "./Header";



function Layout(){

    return(
        <>
        <div className="header"><Header/>
        <div className="sidebar">
            <nav>
            <ul>
                <li><Link to= "/" className="active"> <i className="fas fa-home"></i> Home</Link></li>
                <li><Link to= "/About"> <i className="fas fa-info-circle"></i> About</Link></li>
                <li><Link to= "/NewHere"> <i className="fas fa-plus"></i> New Here</Link></li>
                <li><Link to= "/GetInvolve"> <i className="fas fa-handshake"></i> Get Involved</Link></li>
                <li><Link to= "/ContactUs"> <i className="fas fa-envelope"></i> Contact Us</Link></li>
                <li><Link to= "/Donation"> <i className="fas fa-donate"></i> Donation Link</Link></li>
                <li><Link to= "/Branches"> <i className="fas fa-code-branch"></i> Branches</Link></li>
                <li><Link to= "/Login"> <i className="fas fa-code-branch"></i> Login</Link></li>
            </ul>
            </nav>
        </div>
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )

}

export default Layout;
