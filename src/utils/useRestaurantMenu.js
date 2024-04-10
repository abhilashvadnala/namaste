import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API_URL } from "./constnants";

/**
 * always think of the contract of the hook
 * @param {*} resId 
 * @returns restaurantInformation
 */
const useRestaurantMenu = (resId) => {
    const [restaurantInfo, setRestInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const url = RESTAURANT_MENU_API_URL + resId;
        const data = await fetch(url);
        const json = await data.json();
        setRestInfo(json);
    }
    return restaurantInfo;
}

export default useRestaurantMenu;
