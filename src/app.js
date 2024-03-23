import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";

const Grocery = lazy(()=>import("./components/Grocery"));


const AppLayout =() =>{
    const[userName , setUserName] = useState();
    
    useEffect(() =>{
        const data = {
            name :"Nikhil Reddy",
        };
    },[]);
    return(
        <div className="app">
            <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
            <Header/>
            </UserContext.Provider>  
            <Outlet/>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<Shimmer/>}> <Grocery/></Suspense>,
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu/>,
            },
        ],
        errorElement: <Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

