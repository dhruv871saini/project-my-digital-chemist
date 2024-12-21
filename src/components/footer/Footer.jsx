import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
<div className='bg-light circular-img text-center '>            <img src="/gallery/SayaCare 2.png" alt="SayaCare" className="footer-imag mt-5" />
</div>            <p>Your Online Pharmacy providing complete Transparency in <span className="highlight">Quality and Price</span></p>
          </div>

          {/* Legal Section */}
          <div className="col-md-4">
            <div className="footer-box">
              <div>
                <h6>Legal</h6>
                <ul className="list-unstyled">
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/terms">Terms & Condition</Link></li>
                  <li><Link to="/return-exchange">Return & Exchange</Link></li>
                  <li><Link to="/faqs">FAQs</Link></li>
                  <li><Link to="/refer">Refer and Earn</Link></li>
                </ul>
              </div>
              <div>
                <h6>Know More</h6>
                <ul className="list-unstyled">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/generic-medicine">Generic Medicine</Link></li>
                  <li><Link to="/double-tested">Double Tested Medicine</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media and Google Play Section */}
          <div className="col-md-4 text-center">
            <div className="google-play">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img src="/gallery/555555-removebg-preview.png" className='w-100' alt="Get it on Google Play" />
              </a>
            </div>
            <div className="follow-us">
              <span>Follow Us</span> For More
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SayaCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
