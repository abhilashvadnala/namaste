import { CDN_URL } from "../utils/constnants";

export default RestaurantCard = (props) => {
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, totalRatingsString } = props.resData;
    let imgUrl = `${CDN_URL}${cloudinaryImageId}`;
    return (
        <div className="m-4 p-4 w-[300px]">
            <div className="w-72 h-56">
                <img className="w-full h-full object-cover rounded-lg" src={imgUrl} alt="panda-express-img" />
            </div>
            <div className="pl-2">
                <h3 className="font-bold text-lg py-2 white-space: nowrap text-ellipsis max-w-xs">{name}</h3>
                <h5>Rating: {avgRating} ({totalRatingsString})</h5>
                <p className="text-justify">{cuisines.join(',')}</p>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    );
}

// Higher Order Function/Component
export const labledRestaurantCard = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Free Delivery</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}