import React from 'react';
import '../styles/Footer.css';
// Optional: If using an icon library like React Icons
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-about">
          {/* Replace with your actual logo */}
          <img src="/burnLogo.jpeg" alt="Burn Logo" className="footer-logo" />
          <p>
          BURN Headquarters, Nairobi, Kenya 2nd Floor, Westcom Point, Westlands<br />
          Nigeria office: Plot 5, Etal Avenue, off Kudirat Abiola way, Oregun Lagos.<br />
          </p>
        </div>
        <div className="footer-top-right">
          {/* <button className="btn btn-primary">HELP CENTER</button> */}
          <div className="social-icons">
            {/* Replace with actual links and icons */}
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i>{/* <FaFacebookF /> */}</a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i>{/* <FaInstagram /> */}</a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i>{/* <FaLinkedinIn /> */}</a>
          </div>
        </div>
      </div>

      <nav className="footer-nav">
        <div className="footer-nav-col">
          <h3>Products</h3>
          <ul>
           <li><a href="#">Electric Stoves</a></li>
            <li><a href="#">Wood Stoves</a></li>
            <li><a href="#">Institutional Stoves</a></li>
            <li><a href="#">Cookware & Grill</a></li>
            <li><a href="#">LPG Stoves</a></li>
            <li><a href="#">Ethanal Stoves</a></li>
            <li><a href="#">Charcoal Stoves</a></li>
          </ul>
        </div>
        <div className="footer-nav-col">
          <h3>Carbon</h3>
          <ul>
            <li><a href="#">Carbon</a></li>
            <li><a href="#">Intergrity</a></li>
           
          </ul>
        </div>
        <div className="footer-nav-col">
          <h3>Policies</h3>
          <ul>
            <li><a href="#">Quality Policy</a></li>
            <li><a href="#">EMS Policy</a></li>
            <li><a href="#">IMS Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">EHS Policy</a></li>
            <li><a href="#">Environment Management System Plan</a></li>
          </ul>
        </div>
        <div className="footer-nav-col">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-nav-col">
          <h3>Call Centers</h3>
          <ul>
            <li><a href="#">Kenya (Manufacturing Facility)</a></li>
            <li><a href="#">Ethiopia</a></li>
            <li><a href="#">Uganda</a></li>
            <li><a href="#">Zambia</a></li>
            <li><a href="#">Tanzania</a></li>
            <li><a href="#">Somalia</a></li>
            <li><a href="#">DRC Congo</a></li>
            <li><a href="#">Nigeria</a></li>
            <li><a href="#">Senegal</a></li>
            
          </ul>
        </div>
      </nav>

      

      <div className="footer-bottom">
        <div className="footer-copyright">
         
          
          <p>
            Copyright 2000-{new Date().getFullYear()} BurnStoves, Inc. All rights reserved.@Brabyns
           
          </p>
        </div>
        <div className="footer-legal-links">
          <select name="currency" className="currency-selector">
            <option value="ENG">English</option>
            <option value="ENG">Kiswahil</option>
            <option value="ENG">Zulu</option>
            <option value="ENG">Africans</option>
            {/* Add other currencies as needed */}
          </select>
          <a href="#">PRIVACY</a>
          <a href="#">COOKIES</a>
          <a href="#">TERMS</a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;