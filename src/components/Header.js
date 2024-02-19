import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () =>{
    const [btName, setbtName] = useState("Login");

    return(
    <div className="header">
        <div className="logo">
            <img src={LOGO_URL} height={80} width={90}></img>
        </div>
        <div className="navItems">
            <ul>
                <li>
                    <Link to={"/"}>
                    Home
                    </Link>
                </li>
                <li><Link to={"/about"}>About US</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li>Cart</li>
                <button className="login"
                    onClick={() =>{
                        btName === "login" ? setbtName("logout") : setbtName("login");
                    }}
                >
                    {btName}
                </button>
            </ul>
        </div>
    </div>
    )
}

export default Header;