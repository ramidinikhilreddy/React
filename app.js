import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return(
    <div className="header">
        <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9fFoG5T
            tehW43SQmid_WniRE2gJHoQ1E8MlsGDzlMcqq9IRmpZ7qjFUPxJKtFDnURrGM&usqp=CAU" height={80} width={90}></img>
        </div>
        <div className="navItems">
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}

const RestaurantCard = ({resName,cuisines,avgRating}) =>{
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>   
            <img className="res-logo"
                src="https://static.toiimg.com/photo/57867312.cms" height={180} width={230}>
            </img>   
            <h3>{resName}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
        </div>
    )
}

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="resto-container">
                <RestaurantCard 
                    resName="MeghanaFoods"
                    cuisines="Asian, Biryani,Special"
                    avgRating="4.3"/>
                <RestaurantCard
                     resName="KFC"
                     cuisines="Burger,Wed-Offer"
                     avgRating="4.5"/>
                <RestaurantCard
                     resName="Kritunga"
                     cuisines="Starters,Biryani,Special"
                     avgRating="4.8"/>
                <RestaurantCard
                     resName="Kannur Food Point"
                     cuisines="Kerala, Chinese"
                     avgRating="4.0"/>
                
            </div>
        </div>
    )
}
const AppLayout =() =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
