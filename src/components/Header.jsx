import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constnants";

export default Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} />
            </div>
            <nav className="nav-container">
                <ul className="navigation-list">
                    <li className="nav-list-item">
                        <Link style={{textDecoration: "none", color: "black"}} to={"/"}>Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link style={{textDecoration: "none", color: "black"}} to={"/about-us"}>About Us</Link>
                    </li>
                    <li  className="nav-list-item">Cart</li>
                </ul>
            </nav>
        </div>
    );
}