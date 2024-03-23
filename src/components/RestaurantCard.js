import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="m-4 p-4 w-[220px] h-[330px] rounded-xl bg-gray-200 hover:bg-sky-200 flex flex-col justify-between">
            <img
                className="h-[135px] w-[180px] rounded-md object-cover"
                src={CDN_URL + resData.info.cloudinaryImageId}
                alt={resData.info.name}
            />
            <div>
                <h3 className="font-bold py-2 text-lg">{resData.info.name}</h3>
                <h4 className="truncate">{resData.info.cuisines.join(", ")}</h4>
                <h4>{resData.info.avgRating}*</h4>
                <h4>{resData.info.costForTwo}</h4>
                <h4>{resData.info.sla.deliveryTime}mins</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;
