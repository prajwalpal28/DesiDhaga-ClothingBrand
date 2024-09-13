import { useContext } from 'react';
import PropTypes from 'prop-types';
import '../ProductDisplay/ProductDisplay.css';
import star from '../assets/star.png';
import star_dull from '../assets/star_dull.png';
import { ShopContext } from '../../context/ShopContext';

export const ProductDisplay = (props) => {

    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star_dull} alt="star dull" />
                    <p>(3121)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ₹{product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ₹{product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto ex ipsum odio soluta dolore?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, commodi.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size-options">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>
                    ADD TO CART
                </button>
                <p className='productdisplay-right-category'><span>Category :</span>Woman, Saree</p>
            </div>
        </div>
    );
};

// Prop type validation
ProductDisplay.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Add id validation
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        new_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        old_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
};


export default ProductDisplay;
