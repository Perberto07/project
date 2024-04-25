
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file for styling
import logoImage from '../images/logo.jpg';

function Header() {
    return (
        <header className="header">
                <Link to="/">
                <img src={logoImage} alt="not" className="logo" />
                </Link>
                <h1>Christ, The Living Stone Fellowship</h1>
        </header>
    );
}

export default Header;