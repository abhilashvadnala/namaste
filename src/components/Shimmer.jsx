import React  from "react";

const ShimmerCard = ({key}) => <div className="shimmer-card" key={key}></div>;

export default Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array(9).fill().map((_, index) => (<ShimmerCard key={index} />))};
        </div>
    )
}