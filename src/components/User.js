import { useState,useEffect } from "react";
const User = () =>{
    const[count,setCount] = useState(0);
    const[userData,setUserData] = useState("Dummy"); 
    
    const countFunction = () =>{
        setCount(count+1);
    }
    useEffect(()=>{
        fetechGit();
    },[]);

    const fetechGit = async()=>{
        const data = await fetch("https://api.github.com/users/ramidinikhilreddy");
        const json = await data.json();
        setUserData(json);
        console.log(json);
    }
    return(
        <div className="p-5" >
            <img className=" w-[200px]" src={userData.avatar_url}/>
            <div className="flex text-center" >
                <h1 className="font-bold text-lg mt-1">Count:{count}</h1>
                <button className="bg-sky-500 hover:bg-sky-700 p-1 ml-1 mt-1 rounded-xl" onClick={countFunction}>
                    increase count
                </button>
                </div>
            <h2>Name:{userData.name}</h2>
            <h3>Location:{userData.location}</h3>
            <h3>Contact: @nikhilreddy</h3>
            
        </div>
    );
};

export default User;