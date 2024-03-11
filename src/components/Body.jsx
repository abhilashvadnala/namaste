import { useEffect, useState } from 'react';
import { RES_LISTS_API_URL } from '../utils/constnants';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

export default Body = () => {
    const [resList, setResList] = useState([]);
    const [showTopRated, toggleTopRated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(RES_LISTS_API_URL);
            const restaurants = await response.json();
            setResList(restaurants.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        } catch (error) {
            console.error('Failed to fetch restaurants:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleFilter = () => {
        toggleTopRated(prev => !prev);
    };

    const topRatedBtnStyle = {
        borderRadius: '10px',
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (showTopRated) {
            topRatedBtnStyle['boxShadow'] = '#fef4f3';
            var filtered = resList.filter(item => parseFloat(item.info.avgRatingString) > 4.5);
            setResList(filtered);
        } else {
            fetchData();
        }
    }, [showTopRated]);

    if(resList.length === 0) {
        return <Shimmer />;
    } else {
        return (
            <div className="body">
                <button style={topRatedBtnStyle} onClick={toggleFilter}>
                    {isLoading ? 'Loading...' : 'Top Rated'}
                </button>
                <div className="res-container">
                    {resList.map((item) => <RestaurantCard key={item.info.id} resData={item.info} />)}
                </div>
            </div>
        );
    }
}
