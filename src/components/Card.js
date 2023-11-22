import { THUMBNAIL_URL} from "../utils/constants";


const Card = (props) => {
    const {resData} = props;
    const {name,cuisines,avgRating,cloudinaryImageId} = resData?.info;
      return (
    
        <div className="card">
    
          <div className="product-img">
            <img
              className="thumbnail"
              src={THUMBNAIL_URL + cloudinaryImageId}
              rel="onepiece restaurant"
            ></img>
          </div>
    
          <div className="text-area">

            <h3 className="shop-name">{name}</h3>
            <h3 className="rating">{avgRating + " stars"}</h3>
            <h4 className="cusine"> {cuisines.join(", ")}</h4>
        
          </div>
        </div>
      );
    };

    export default Card;