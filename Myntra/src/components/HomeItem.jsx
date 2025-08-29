import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import PropTypes from "prop-types";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  // Safe access with default values
  const rating = item.rating || {};
  const stars = rating.stars || 0;
  const count = rating.count || 0;
  const returnPeriod = item.return_period || 0;
  const deliveryDate = item.delivery_date || "";

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {stars} ⭐ | {count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {returnPeriod > 0 && (
        <div className="return-period">
          {returnPeriod} days return available
        </div>
      )}
      {deliveryDate && (
        <div className="delivery-date">Delivery by {deliveryDate}</div>
      )}
      {elementFound ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleRemove}
        >
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddToBag}
        >
          <GrAddCircle /> Add to Bag
        </button>
      )}
    </div>
  );
};

// PropTypes definition
HomeItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    item_name: PropTypes.string.isRequired,
    original_price: PropTypes.number.isRequired,
    current_price: PropTypes.number.isRequired,
    discount_percentage: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      stars: PropTypes.number,
      count: PropTypes.number,
    }),
    return_period: PropTypes.number,
    delivery_date: PropTypes.string,
  }).isRequired,
};

// Default props for optional values
HomeItem.defaultProps = {
  item: {
    rating: {
      stars: 0,
      count: 0,
    },
    return_period: 0,
    delivery_date: "",
  },
};

export default HomeItem;
