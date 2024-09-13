import './Hero.css';
import hand from '../assets/hand.png';
import right_arrow from "../assets/right-arrow.png";
import hero_img from "../assets/hero_img1.webp";

export const Hero = () => {
    return (
        <div className="hero">

            <div className="hero-left">
                <h2>New Arrivals</h2>

                <div className="hero-collection">
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand} alt="hand icon" />
                    </div>
                    <p>Collections</p>
                    <p>For everyone</p>
                </div>

                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={right_arrow} alt="arrow" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt="Hero Image" />
            </div>
        </div>
    );
};
