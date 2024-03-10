import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
        
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>;

    const resDetails = resInfo?.data?.cards[0]?.card?.card?.info;
    const menuCards = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return(
        <div className="menu">
                <h1>{resDetails.name}</h1>
                <h3>{resDetails.cuisines.join(", ")}</h3>
                <h3 className="avgRating">{resDetails.avgRating}</h3>
        
            <h2>Menu</h2>
            <ul>
               {menuCards?.map((menu)=>(
                <>
                {menu.card.card.itemCards?.map((item)=>(
                    <li key={item.card.info.id}>
                    {item.card.info.name} - {"Rs"} -
                    {item.card.info.defaultPrice/100 || item.card.info.price/100}
                    </li>
                ))}
                </>
               ))}
            </ul>
            
        </div>
    );
};

export default RestaurantMenu;