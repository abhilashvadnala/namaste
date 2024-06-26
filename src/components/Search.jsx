import { useState } from "react";

export default Search = ({ searchFn }) => {
    const [searchText, setSearchText] = useState("");
    const searchRestaurants = () => {
        searchFn(searchText);
    }
    return (
        <div className="search-bar-container flex space-x-2">
            <div className="search-bar">
                <input
                    className="search-bar-input border border-solid border-black"
                    type="text"
                    placeholder="Search restaurant or food..."
                    style={{ padding: '0px 10px' }}
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                {searchText && (
                    <button className="clear-btn" onClick={() => {
                        setSearchText('');
                        searchFn("");
                    }}>
                        {/* The button is only shown when there is text in the search input */}
                    </button>
                )}
            </div>
            <button className='search-bar-btn mx-4' onClick={searchRestaurants} >Search</button>
        </div>
    );
}