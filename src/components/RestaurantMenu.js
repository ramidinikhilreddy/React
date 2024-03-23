import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState, useRef, useEffect } from "react";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null); 
    const accordionRefs = useRef([]); // Ref for all accordion elements
    const activeAccordionRef = useRef(null); // Ref for the active accordion

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    useEffect(() => {
        // Ensure that active accordion is always in view
        if (activeAccordionRef.current) {
            activeAccordionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [showIndex]);

    if (resInfo === null) return <Shimmer />;

    const resDetails = resInfo?.data?.cards[0]?.card?.card?.info;
    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center">
            <h1 className="font-bold my-3 text-2xl">{resDetails.name}</h1>
            <h3 className="font-bold">{resDetails.cuisines.join(", ")}</h3>
            {categories.map((category, index) => (
                <div key={index} ref={el => accordionRefs.current[index] = el}> {/* Set ref for all accordions */}
                    <RestaurantCategory 
                        data={category?.card?.card}
                        showItems={index === showIndex}
                        setShowIndex={() => {
                            setShowIndex(prevIndex => {
                                const newIndex = prevIndex === index ? null : index; // Toggle index
                                if (newIndex !== null) {
                                    activeAccordionRef.current = accordionRefs.current[index]; // Update active accordion ref
                                }
                                return newIndex;
                            });
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default RestaurantMenu;
