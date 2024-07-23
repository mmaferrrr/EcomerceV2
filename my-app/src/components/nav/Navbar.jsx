import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { cartItems } = useContext(CartContext); 

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src='images/wPlnt.png' alt="Website Logo" />
      </div>
      <div className={`menu-toggle ${menuActive ? 'is-active' : ''}`} id="mobile-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/products" onClick={closeMenu}>Products</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
        <div className="cart-icon">
          <img src="/images/shopping-cart.png" alt="Shopping Cart" />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </div>
      </nav>
      {menuActive && <div id="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Navbar;
