import './Offer.css';
import Offers_img from '../assets/offers_img.webp';

export const Offer = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <hr />
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={Offers_img} alt="Offers" />
            </div>
        </div>
    );
};
