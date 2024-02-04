import { LOGO_URL } from "../utils/constant";

const Header = () =>{
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
            </ul>
        </div>
    </div>
    )
}

export default Header;