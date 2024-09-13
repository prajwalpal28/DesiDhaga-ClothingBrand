import PropTypes from 'prop-types'; // Import PropTypes
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({ id, image, name, new_price, old_price }) => {
    return (
        <div className='item'>
            <Link to={`/product/${id}`}><img onClick={window.scrollTo(0, 0)} src={image} alt={name} /></Link>
            <p className='item-name'>{name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ₹{new_price}
                </div>
                <div className="item-price-old">
                    ₹{old_price}
                </div>
            </div>
        </div>
    )
}

// Prop type validation
Item.propTypes = {
    id: PropTypes.number.isRequired, // id should be a number and is required
    image: PropTypes.string.isRequired, // image should be a string (URL) and is required
    name: PropTypes.string.isRequired, // name should be a string and is required
    new_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // price can be a string or number and is required
    old_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // same as above
};

export default Item;
