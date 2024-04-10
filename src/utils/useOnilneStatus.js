import { useState, useEffect } from "react";

/**
 * 
 */
const useOnlineStatus = () => {
    // check online activity
    const [isOnline, setOnline] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => setOnline(false));
    }, []);
    return isOnline;
}

export default useOnlineStatus;