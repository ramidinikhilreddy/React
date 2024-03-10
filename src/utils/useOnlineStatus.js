import { useEffect,useState } from "react"

const useOnlineStatus = ()=>{

    const[onlineStatus,setOnlineStatus] = useState(window.navigator.onLine);

    useEffect(()=>{

        const handleOnlineStatusChange = () => {
            setOnlineStatus(window.navigator.onLine);
        }

        window.addEventListener('offline',handleOnlineStatusChange);
        window.addEventListener('online',handleOnlineStatusChange);
        },[]);

    return onlineStatus;
}

export default useOnlineStatus;