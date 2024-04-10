import { useEffect, useState } from 'react';
import { RES_LISTS_API_URL } from '../utils/constnants';
import RestaurantCard, { labledRestaurantCard } from './RestaurantCard';
import Shimmer from './Shimmer';
import Search from './Search';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnilneStatus';

export default Body = () => {
    const [resList, setResList] = useState([]);
    const [displayList, setDisplayList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(RES_LISTS_API_URL);
            const restaurants = await response.json();
            const allRestaurants = restaurants.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
            setResList(allRestaurants);
            setDisplayList(allRestaurants);
        } catch (error) {
            console.error('Failed to fetch restaurants:', error);
        }
    };

    const applyFilter = (filter) => {
        setActiveFilter(filter);
        if (filter === "topRated") {
            setSearchTerm("");
            setDisplayList(resList.filter(item => parseFloat(item.info.avgRatingString) > 4.5));
        } else if (filter === "fastDelivery") {
            setSearchTerm("");
            setDisplayList(resList.filter(item => parseInt(item.info.sla.deliveryTime) <= 30));
        } else {
            setDisplayList(resList);
        }
    }

    const toggleFilter = (filter) => {
        return () => {
            if (activeFilter === filter) {
                applyFilter(null);
            } else {
                applyFilter(filter);
            }
        }
    }

    const applySearchFilter = () => {
        if (searchTerm) {
            const searchFiltered = resList.filter(item =>
                item.info.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setDisplayList(searchFiltered);
        } else {
            setDisplayList(resList);
        }
    };

    // extracted Higher Order Component
    const LabledRestaurantCard = labledRestaurantCard(<RestaurantCard />)

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        applySearchFilter();
    }, [searchTerm, resList]);

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>Looks like you are offline. Please check your internet connection</h1>
        )
    }

    return resList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex justify-center mt-8">
                <Search searchFn={setSearchTerm} />
                <div className='mx-4'>|</div>
                <div>
                    <button className="mr-4" onClick={toggleFilter('topRated')}>
                        Over 4.5 ★
                    </button>
                    <button className="mx-4" onClick={toggleFilter('fastDelivery')}>
                        Under 30 min
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap mx-20 justify-center">
                {displayList.map((item) => (
                    <Link
                        to={"/restaurants/" + item.info.id}
                        key={item.info.id}
                        style={{ textDecoration: "none", color: 'black' }}
                    >
                        {
                            item.info?.loyaltyDiscoverPresentationInfo?.freedelMessage === 'FREE DELIVERY'
                                ? <LabledRestaurantCard resData={item.info} />
                                : <RestaurantCard resData={item.info} />
                        }
                    </Link>))}
            </div>
        </div>
    );
}
