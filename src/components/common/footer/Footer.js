import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMobileAlt, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="main-footer">
          <div className="container">
            <div className="row">
                          <div className="col-md-3">
                          {/* <FontAwesomeIcon className="icon" icon={faMobileAlt} /> */}
                            <div className="footer-text ">
                                <h3>Got Question? call Us 24/7!</h3>
                                <h5 className="my-3">(800) 8001-8588, <br />(0600) 874 548</h5>
                                <p>507-Union Trade ipsum Doler CentreZero Road, Bangladesh.</p>
                               
                            </div>
                            </div>
                          <div className="col-md-3">
                          <div className="footer-text">
                                <h3 className="ms-4">Products</h3>
                                <ul>
                                    <li><Link to="/">Featured</Link></li>
                                    <li><Link to="/">New products</Link></li>
                                    <li><Link to="/">Best sales</Link></li>
                                    <li><Link to="/">Contact us</Link></li>
                                    <li><Link to="/">About us</Link></li>

                                </ul>
                            </div>
              </div>
                          <div className="col-md-3">
                          <div className="footer-text">
                                  <h3 className="ms-4">Our Company</h3>
                              
                                <ul>
                                    <li><Link to="/">Delivery</Link></li>
                                    <li><Link to="/">Leal Notice</Link></li>
                                    <li><Link to="/">Terms and condition of use</Link></li>
                                    <li><Link to="/">Sitemap</Link></li>
                                    <li><Link to="/">Secure payment</Link></li>
                                </ul>
                            </div>
              </div>
                          <div className="col-md-3">
                   
                            {/* <i className="fas fa-money-check-alt text-white"></i>
                            <FontAwesomeIcon className="icon" icon={faMoneyCheckAlt} /> */}
    
                            <div>
                                <div className="footer-text">
                                    <h3>We are Using Safe Payments</h3>
                                    <img src="https://i.ibb.co/r4skg0Z/american-express.png" alt="" />
                                    <img src="https://i.ibb.co/jggDYdg/carte-bleue.png" alt="" />
                                    <img src="https://i.ibb.co/pLRKKmW/master-card.png" alt="" />
                                    <img src="https://i.ibb.co/5FPvMLh/paypal.png" alt="" />
                                    <img src="https://i.ibb.co/5r7Lg5f/visa.png" alt="" />
                                </div>

                                <div className="footer-text my-4">
                                    <h5>Downloads Apps</h5>
                                    <img src="https://i.ibb.co/2jYMQMF/apple-store.png" alt="" />
                                    <img src="https://i.ibb.co/px2Y8sx/google-store.png" alt="" />
                                </div>
                            </div>
                        
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
