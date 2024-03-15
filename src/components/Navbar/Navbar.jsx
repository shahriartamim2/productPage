import React, { useContext } from "react";
import { counterContext } from "../../counter";
import "./Navbar.css";
import logo from "d:/Front End By React/productPage/src/images/logo.svg";
import cart from "d:/Front End By React/productPage/src/images/icon-cart.svg";
import avatar from "d:/Front End By React/productPage/src/images/image-avatar.png";

const Navbar = () => {

    const value = useContext(counterContext);

  return (
    <div className="navbar">
      <div className="logo-menu">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="cart-profile">
        <div className="cart">
          <img src={cart} alt="cart" />
          <div className="cartcount">{value.cartCount}</div>
        </div>
        <div className="profile">
          <img src={avatar} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
