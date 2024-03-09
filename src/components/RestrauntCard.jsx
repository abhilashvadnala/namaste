import { CDN_URL } from "../utils/constnants";

export default RestrauntCard = (props) => {
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, totalRatingsString } = props.resData;
    let imgUrl = `${CDN_URL}${cloudinaryImageId}`;
    return (
        <div className="res-card">
            <img className="res-img" src={imgUrl} alt="panda-express-img" />
            <h3>{name}</h3>
            <h5>Rating: {avgRating} ({totalRatingsString})</h5>
            <p>{cuisines.join(',')}</p>
            <h4>{costForTwo}</h4>
        </div>
    );
}