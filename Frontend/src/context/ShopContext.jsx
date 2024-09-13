import { createContext, useState } from "react";
import PropTypes from "prop-types";
import data_product from "../components/assets/data.js";

export const ShopContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < data_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);

    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmmount = () => {
        let totalAmmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = data_product.find((product) => product.id === Number(item));
                totalAmmount += itemInfo.new_price * cartItems[item];
            }
            return totalAmmount;
        }
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }


    const contextValue = { getTotalCartItems, getTotalCartAmmount, data_product, cartItems, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

// Prop type validation
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
