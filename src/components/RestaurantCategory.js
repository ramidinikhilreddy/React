import ListItems from "./ListItems";

const RestaurantCategory = ({ data,showItems ,setShowIndex }) => {

    const handleClick = () =>{
        setShowIndex();
    }

    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-3">
            <div className="flex justify-between" >
                <span className="text-lg font-bold">{data.title} ({data.itemCards.length})</span>
                <span className="cursor-pointer" onClick={handleClick}>🔽</span>
            </div>
           {showItems && <ListItems items={data.itemCards}></ListItems>}
        </div>
    );
};

export default RestaurantCategory;
