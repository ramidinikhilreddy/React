import { LOGO_URL } from "../utils/constant";
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () =>{

    const [btName, setbtName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    return(
    <div className="flex bg-pink-100 justify-between shadow-sm mb-2">
        <div className="w-60">
            <img src={LOGO_URL} height={80} width={90}></img>
        </div>
        <div className="flex text-center">
            <ul className="flex p-4 m-4">
                <li className="px-4.5">
                    OnlineStatus{onlineStatus?"🧶":"🎈"}
                </li>
                <li className="px-[20px] hover:font-bold">
                    <Link to={"/"}>
                    Home
                    </Link>
                </li>
                <li className="px-[20px] hover:font-bold"><Link to={"/about"}>About US</Link></li>
                <li className="px-[20px] hover:font-bold"><Link to={"/contact"}>Contact</Link></li>
                <li className="px-[20px] hover:font-bold">Cart</li>
                <li className="px-[20px] hover:font-bold"><Link to={"/grocery"}> Grocery</Link></li>
                <button className="pl-[12px] pr-[5px] hover:font-bold hover:bg-red-300 rounded-lg"
                    onClick={() =>{
                        btName === "login" ? setbtName("logout") : setbtName("login");
                    }}
                >
                    {btName}
                </button>
                <li className="px-[20px] font-bold">{loggedInUser}</li>
            </ul>
        </div>
    </div>
    )
}

export default Header;