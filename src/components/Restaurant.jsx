import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ListItem from './ListItem';

// TODO - mock swiggy page and learn more about building accordions
const MenuCategory = ({ data }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className='my-3'>
            <div className='flex justify-between text-lg font-bold'>
                <span className=''>{data.title} {'(' + data.itemCards.length + ')'}</span>
                <span className='w-4 h-4' onClick={() => setIsOpen(isOpen => !isOpen)}>
                    <img className={isOpen && 'transform: rotate(90deg)'} src={require('../../assets/forward_arrow_right_icon.png')} />
                </span>
            </div>
            {
                isOpen && <div>
                    <ul>
                        {
                            data?.itemCards?.map((card, idx) => (
                                <ListItem key={idx} card={card} />
                            ))
                        }
                    </ul>
                </div>
            }
            <div className='h-2 bg-gray-300'></div>
        </div>
    )
}

const Restaurant = () => {

    const { resId } = useParams();
    const restaurantData = useRestaurantMenu(resId);

    if (restaurantData === null) return <Shimmer />

    const resInfo = restaurantData?.data.cards[2].card.card.info;
    const allMenu = restaurantData?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    const categories = allMenu.filter((item) => item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="flex flex-col w-7/12 mx-auto">
            <div className="my-4 flex flex-row justify-between align-middle">
                <div className='space-y-1'>
                    <h1 className='font-extrabold text-3xl'>{resInfo.name}</h1>
                    <div className='text-xl font-semibold flex align-middle space-x-1'>
                        <img className='w-5 h-5 inline' src={require('../../assets/green_star_icon.png')} />
                        <span>{resInfo.avgRating} {'(' + resInfo.totalRatings + '  ratings)'}</span>
                    </div>
                    <p className='text-lg text-red-400'>{resInfo?.cuisines?.join(", ")}</p>
                    <p className='font-extralight'>{resInfo.areaName}</p>
                    <p>{resInfo.costForTwoMessage}</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className='my-4 flex flex-row justify-center border-y-2 text-red-400 text-lg'>
                    Menu
                </div>
                <div>
                    {
                        categories.map((menuItem, index) => <MenuCategory key={index} data={menuItem.card.card} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Restaurant