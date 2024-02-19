import { useState,useEffect } from "react"
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
    const [resInfo,setResInfo] = useState(null);
        
    const {resId} = useParams();
    
    useEffect(() =>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log(json); 
        setResInfo(json);
    };


    if(resInfo === null) return <Shimmer/>;

    const {name , cuisines , avgRating} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3 className="avgRating">{avgRating}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) =>(
                     <li>
                        {item.card.info.name} - {"Rs"} -
                        {item.card.info.defaultPrice/100 || item.card.info.price/100}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default RestaurantMenu;