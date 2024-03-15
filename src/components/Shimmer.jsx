import React  from "react";

const ShimmerCard = () => <div className="shimmer-card"></div>;

export default Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array(9).fill().map((_, index) => (<ShimmerCard key={index} />))};
        </div>
    )
}