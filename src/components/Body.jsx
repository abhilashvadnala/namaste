import data from '../../data.json';
import RestrauntCard from './RestrauntCard';

export default Body = () => {
    return (
        <div className="body">
            <div className="res-container">
                {data.map((item) =>  <RestrauntCard key={item.info.id} resData={item.info} />)}
            </div>
        </div>
    );
}