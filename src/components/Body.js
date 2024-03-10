import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import  Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{
    const [lisOfRestraunts, setlistOfRestraunts] = useState([]);
    const [filteredRestraunts,setFilteredRestraunts] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = async () =>{
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        //console.log(json);
        setlistOfRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(json?.data?.cards[1]?.card?.card);
    }
    
    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false)return <h1>Oops! You are Offline!!!...</h1>
    
    if(lisOfRestraunts.length === 0){
        return <Shimmer/>;
    }

    return(
        <div className="body">
            <div className="flex text-center justify-between">
                <div className="search m-2 p-2">
                    <input type="text" className="border border-solid border-black" value={searchText}
                     onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className=" bg-green-100 hover:bg-green-300 px-4 py-2 m-4 rounded-lg" onClick={()=>{
                    const filteredRestraunts= lisOfRestraunts.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                    )

                    setFilteredRestraunts(filteredRestraunts);
                    }}>Search</button>
                </div>
                <div className="flex items-center">
                <button className="bg-gray-100 m-4 px-4 py-2 rounded-lg hover:bg-pink-300" 
                    onClick={() => {
                        const filteredList = lisOfRestraunts.filter(
                            (restaurants) => restaurants.info.avgRating > 4.0);
                        setlistOfRestraunts(filteredList);
                    }}>Top Rated Restraunts
                </button>
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestraunts.map((restaurants) => (
                    <Link key={restaurants.info.id} to={"/restaurant/" + restaurants.info.id}><RestaurantCard resData = {restaurants}/></Link>)
                    )
                }
            </div>
        </div>
    );
};

export default Body;