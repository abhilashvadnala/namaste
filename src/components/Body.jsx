import { useEffect, useState } from 'react';
import { RES_LISTS_API_URL } from '../utils/constnants';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import Search from './Search';
import { Link } from 'react-router-dom';

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

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        applySearchFilter();
    }, [searchTerm, resList]);

    return resList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search">
                <div className="search-tags">
                    <button
                        className={`search-tag-btn ${activeFilter === 'topRated' ? 'active' : ''}`}
                        onClick={toggleFilter('topRated')}
                    >
                        Over 4.5 ★
                    </button>
                    <button
                        className={`search-tag-btn ${activeFilter === 'fastDelivery' ? 'active' : ''}`}
                        onClick={toggleFilter('fastDelivery')}
                    >
                        Under 30 min
                    </button>
                </div>
                <Search searchFn={setSearchTerm} />
            </div>
            <div className="res-container">
                {
                    displayList.map((item) => (
                        <Link
                            to={"/restaurants/" + item.info.id}
                            key={item.info.id}
                            style={{ textDecoration: "none", color: 'black' }}
                        >
                            <RestaurantCard resData={item.info} />
                        </Link>))
                }
            </div>
        </div>
    );
}
