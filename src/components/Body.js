import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import  Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
        console.log(json);
        setlistOfRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.
            restaurants);
        setFilteredRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.
            restaurants);
    }
    
    if(lisOfRestraunts.length === 0){
        return <Shimmer/>;
    }

    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                     onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button  onClick={()=>{
                    const filteredRestraunts= lisOfRestraunts.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                    )

                    setFilteredRestraunts(filteredRestraunts);
                    }}>search</button>
                </div>
                <button className="filter_button" 
                    onClick={() => {
                        const filteredList = lisOfRestraunts.filter(
                            (restaurants) => restaurants.info.avgRating > 4.0);
                        setlistOfRestraunts(filteredList);
                    }}>Top Rated Restraunts
                </button>
            </div>
            <div className="resto-container">
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