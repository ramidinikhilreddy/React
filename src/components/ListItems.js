import { CDN_URL } from "../utils/constant";

const ListItems = ({items}) =>{
   
    return(
        <div>
            <div>
                {items.map(item=> 
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-300 text-left">
                    <div className="flex justify-between">
                    <div className="p-2 flex">
                        <span className="font-bold">{item.card.info.name}</span>
                        <span className="text-sm"> - ₹ 
                            {item.card.info.price/100 || item.card.info.defaultPrice/100}
                        </span>
                    </div>
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId } className="w-20"></img>
                    </div>
                        <p className="text-xs">{item.card.info.description}</p>
                </div>)}    
            </div> 
        </div>
    );
};

export default ListItems;