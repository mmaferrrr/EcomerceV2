import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <img className="page-logo" src='/images/plntlogo.png' alt="Website Logo" />
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Policies</h4>
            <ul>
              <li><a href="/return-policy">Return Policy</a></li>
              <li><a href="/shipping-info">Shipping Information</a></li>
              <li><a href="/faqs">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Get In Touch</h4>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="mailto:plantjuices@gmail.com">plantjuices@gmail.com</a></li>
              <li><a href="tel:+18006479092">+1 800-647-9092</a></li>
              <li><a href="/location">1600 North Wind Pl, Charlotte NC, 28210</a></li>
            </ul>
            <a href="https://www.instagram.com"><img className="social-icon" src='/images/instagram.png' alt="Instagram Icon" /></a>
            <a href="https://www.facebook.com"><img className="social-icon" src='/images/facebook.png' alt="Facebook Icon" /></a>
            <a href="https://www.twitter.com"><img className="social-icon" src='/images/twitter.png' alt="Twitter Icon" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2024 Plants | All rights reserved | Privacy Policy | Accessibility</p>
      </div>
    </footer>
  );
};

export default Footer;
