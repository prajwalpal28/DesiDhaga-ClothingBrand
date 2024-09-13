import { useContext } from 'react';
import PropTypes from 'prop-types';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import down_arrow from "../components/assets/down-arrow.png";
import { Item } from '../components/Item/Item';

export const ShopCategory = (props) => {
  const { data_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={down_arrow} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
        {data_product.map((item, i) => {
          if (props.Category === item.Category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

// Adding PropTypes validation
ShopCategory.propTypes = {
  Category: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
};
