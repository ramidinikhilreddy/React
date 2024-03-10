import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
    const [btName, setbtName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
    <div className="flex bg-pink-100 justify-between shadow-sm mb-2">
        <div className="w-60">
            <img src={LOGO_URL} height={80} width={90}></img>
        </div>
        <div className="flex text-center">
            <ul className="flex p-4 m-4 hover:font-bold">
                <li className="px-4.5">
                    OnlineStatus{onlineStatus?"🧶":"🎈"}
                </li>
                <li className="px-[20px]">
                    <Link to={"/"}>
                    Home
                    </Link>
                </li>
                <li className="px-[20px]"><Link to={"/about"}>About US</Link></li>
                <li className="px-[20px]"><Link to={"/contact"}>Contact</Link></li>
                <li className="px-[20px]">Cart</li>
                <li className="px-[20px]"><Link to={"/grocery"}> Grocery</Link></li>
                <button className="pl-[12px] pr-[5px]"
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