import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [lisOfRestraunts, setlistOfRestraunts] = useState([]);
    const [filteredRestraunts, setFilteredRestraunts] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await response.json();
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setlistOfRestraunts(restaurants);
            setFilteredRestraunts(restaurants);
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Oops! You are Offline!!!...</h1>;

    if (lisOfRestraunts.length === 0) {
        return <Shimmer />;
    }

    const handleSearch = () => {
        const filteredRestaurants = lisOfRestraunts.filter(
            (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestraunts(filteredRestaurants);
    };

    const handleTopRatedFilter = () => {
        const filteredList = lisOfRestraunts.filter((restaurant) => restaurant.info.avgRating > 4.0);
        setFilteredRestraunts(filteredList);
    };

    return (
        <div className="body">
            <div className="flex text-center justify-between">
                <div className="search m-2 p-2">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="bg-green-100 hover:bg-green-300 px-4 py-2 m-4 rounded-lg"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                <div className="flex items-center">
                    <button
                        className="bg-gray-100 m-4 px-4 py-2 rounded-lg hover:bg-pink-300"
                        onClick={handleTopRatedFilter}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestraunts.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
