import { useContext } from 'react';
import '../CartItems/CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_cart from '../assets/remove-cart.png';

export const CartItems = () => {
    const { getTotalCartAmmount, data_product = [], cartItems, removeFromCart } = useContext(ShopContext);

    // Calculate the subtotal for the cart
    const calculateSubtotal = () => {
        return data_product.reduce((total, product) => {
            const quantity = cartItems[product.id] || 0;
            return total + (product.new_price * quantity);
        }, 0);
    };

    const subtotal = calculateSubtotal();
    const GST = subtotal * 0.18;  // Assuming 18% GST
    const totalAmount = subtotal + GST;

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <div className="cartitems-header">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {data_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div key={e.id}>
                                <div className="cartitem-format">
                                    <img src={e.image} alt="" className='carticon-product-icon' />
                                    <p>{e.name}</p>
                                    <p>&#8377;{e.new_price}</p>
                                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                    <p>&#8377;{e.new_price * cartItems[e.id]}</p>
                                    <img className='cart-remove-button' src={remove_cart} alt="" onClick={() => { removeFromCart(e.id) }} />
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>Cart Totals</h1>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Subtotal</p>
                                <p>₹{subtotal}</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <p>GST (18%)</p>
                                <p>₹{GST.toFixed(2)}</p> {/* Display GST to 2 decimal places */}
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>₹{totalAmount.toFixed(2)}</h3> {/* Total amount with GST */}
                            </div>
                        </div>
                        <button>Proceed To Checkout</button>
                    </div>

                    <div className="cartitems-promocode">
                        <p>If you have a Promo code, Enter It here</p>
                        <div className="cartitem-promodox">
                            <input type="text" placeholder='Promo Code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
