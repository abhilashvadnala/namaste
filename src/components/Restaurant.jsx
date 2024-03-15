import React, { useEffect, useState } from 'react'
import { RESTAURANT_API_URL } from '../utils/constnants';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';

const MenuCategory = ({data}) => {
    return (
        <div>
            <h4>{data.title}</h4>
            <ul>
                {
                    
                    data?.itemCards?.map(card => (
                        <li key={card.card.info.id}>{card.card.info.name} - {card.card.info.price / 100}</li>
                    ))
                }
            </ul>
        </div>
    )
}

const Restaurant = () => {

    const { resId } = useParams();

    const [restaurantData, setRestaurantData] = useState(null);

    const fetchData = async () => {
        const url = RESTAURANT_API_URL + resId;
        const data = await fetch(url);
        const resData = await data.json();
        setRestaurantData(resData);
    }

    useEffect(() => {
        fetchData();
    }, [resId]);

    if (restaurantData === null) return <Shimmer />

    const resInfo = restaurantData?.data.cards[0].card.card.info;
    const allMenu = restaurantData?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    // allMenu.splice(0, 1); // remove about card from the menu

    return (
        <div className="restaurant-container">
            <div className="restaurant-header">
                <div className='restaurant-info'>
                    <h2>{resInfo.name}</h2>
                    <p>{resInfo?.cuisines?.join(", ")}</p>
                    <p>{resInfo.areaName}</p>
                    <p>{resInfo.costForTwoMessage}</p>
                </div>
                <div className="rating-section">
                    <p>{resInfo.avgRating}</p>
                    <p>{resInfo.totalRatings}</p>
                </div>
            </div>
            <div className="menu-container">
                <div>
                    {
                        allMenu.map((menuItem, index) => <MenuCategory key={index} data={menuItem.card.card} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Restaurant