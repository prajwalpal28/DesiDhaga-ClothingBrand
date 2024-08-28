import React, { useContext } from 'react';
import { useState } from 'react';
import './Navbar.css';
import Logo_Img from '../assets/Logo.png';
import Cart_Img from '../assets/cart.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

export const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext)

    return (
        <div className="navbar">
            <div className="logo">
                <h1>DesiDhaga</h1>
                <img src={Logo_Img} alt="Logo" />
            </div>
            <div className="nav-menu">
                <ul>
                    <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
                </ul>
            </div>
            <div className="nav-login-cart">
                <Link to='/loginsignup'><button>Sign Up</button></Link>
                <Link to='/cart'><img src={Cart_Img} alt="Cart" /></Link>
                <div className="nav-cart-count">
                    {getTotalCartItems()}
                </div>
            </div>
        </div>
    );
};
