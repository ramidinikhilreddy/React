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
        <div>
            <img className="gitimage" src={userData.avatar_url}/>
            <h2>Count:{count}</h2>
            <button className="count" onClick={countFunction}>increase count</button>
            <h2>Name:{userData.name}</h2>
            <h3>Location:{userData.location}</h3>
            <h3>Contact: @nikhilreddy</h3>
        </div>
    );
};

export default User;