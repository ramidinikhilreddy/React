import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () =>{
    const [lisOfRestraunts, setlistOfRestraunts] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter_button" 
                    onClick={() => {
                        const filteredList = lisOfRestraunts.filter(
                            (res) => res.info.avgRating > 4.4);
                        setlistOfRestraunts(filteredList);
                    }}> Top Rated Restraunts
                </button>
            </div>
            <div className="resto-container">
                {
                    lisOfRestraunts.map((restraunt) => (<RestaurantCard resData = {restraunt}/>))
                }
            </div>
        </div>
    );
};

export default Body;