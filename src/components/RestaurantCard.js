import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) =>{
    const{resData} = props;
    return(
        <div className="m-4 p-4 w-[220px] bg-gray-200 hover:bg-sky-200" >   
            <img className="h-[135] w-[180px] rounded-md" 
                src={CDN_URL + resData.info.cloudinaryImageId} >
            </img>   
            <h3 className="font-bold py-2 text-lg">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}*</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime}mins</h4>
        </div>
    );
};

export default RestaurantCard;