import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constnants";

export default Header = () => {
    return (
        <div className="header flex justify-between shadow-md mb-2">
            <div className="logo-container w-52 h-20">
                <img className="w-full h-full object-cover" src={require('../../assets/logo.png')} />
            </div>
            <nav className="nav-container flex items-center px-8">
                <ul className="navigation-list flex space-x-8">
                    <li className="nav-list-item">
                        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link style={{ textDecoration: "none", color: "black" }} to={"/about-us"}>About Us</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link style={{ textDecoration: "none", color: "black" }} to={"/grocery"}>Grocery</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link style={{ textDecoration: "none", color: "black" }} to={"/cart"}>Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
