import Search from "./Search";
import { LOGO_2_URL } from "../utils/constnants";

export default Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_2_URL} />
            </div>
            <Search />
            <nav className="nav-container">
                <ul className="navigation-list">
                    <li className="nav-list-item">Home</li>
                    <li  className="nav-list-item">Cart</li>
                </ul>
            </nav>
        </div>
    );
}