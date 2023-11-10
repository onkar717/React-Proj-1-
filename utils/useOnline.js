import { useEffect , useState } from "react";

const useOnline = () => {
    const [isOnline , setisOnine] = useState(true)

    useEffect (() => {
        window.addEventListener("online" , () => {
            setisOnine(true)
        })
        window.addEventListener("offline" , () => {
            setisOnine(false)
        })
    } , [])
    return isOnline
}

export default useOnline; 