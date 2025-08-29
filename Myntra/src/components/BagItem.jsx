import { useDispatch } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { bagActions } from "../store/bagSlice";
import PropTypes from "prop-types";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  // Safe access with default values
  const returnPeriod = item.return_period || 0;
  const deliveryDate = item.delivery_date || "";

  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.image} alt={item.item_name} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        {returnPeriod > 0 && (
          <div className="return-period">
            <span className="return-period-days">{returnPeriod} days</span>{" "}
            return available
          </div>
        )}
        {deliveryDate && (
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days">{deliveryDate}</span>
          </div>
        )}
      </div>

      <div className="remove-from-cart" onClick={handleRemoveItem}>
        <RiDeleteBin5Fill />
      </div>
    </div>
  );
};

// PropTypes definition
BagItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    item_name: PropTypes.string.isRequired,
    original_price: PropTypes.number.isRequired,
    current_price: PropTypes.number.isRequired,
    discount_percentage: PropTypes.number.isRequired,
    return_period: PropTypes.number,
    delivery_date: PropTypes.string,
  }).isRequired,
};

// Default props for optional values
BagItem.defaultProps = {
  item: {
    return_period: 0,
    delivery_date: "",
  },
};

export default BagItem;
