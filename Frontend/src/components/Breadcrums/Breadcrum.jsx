import PropTypes from 'prop-types';
import '../Breadcrums/Breadcrum.css';
import arrow_icon from '../assets/Arrow.png';

export const Breadcrum = ({ product }) => {
    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="arrow" /> {product.name}
        </div>
    );
};

// Prop type validation
Breadcrum.propTypes = {
    product: PropTypes.shape({
        category: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default Breadcrum;
