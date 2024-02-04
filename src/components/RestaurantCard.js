import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) =>{
    const{resData} = props;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>   
            <img className="res-logo" 
                src={CDN_URL + resData.info.cloudinaryImageId} height={150} width={200}>
            </img>   
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}*</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime}mins</h4>
        </div>
    );
};

export default RestaurantCard;