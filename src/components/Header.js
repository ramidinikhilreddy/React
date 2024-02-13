import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () =>{
    const [btName, setbtName] = useState("Login");

    return(
    <div className="header">
        <div className="logo">
            <img src={LOGO_URL} height={80} width={90}></img>
        </div>
        <div className="navItems">
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Contact</li>
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