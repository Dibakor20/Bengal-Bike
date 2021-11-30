import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <>
            <div className="shop-category d-none d-md-block">
                <p className="category-item">
                    <FontAwesomeIcon className="icon me-2" icon={faBars} />
                    SHOP BY CATEGORY</p>
                <ul>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />Cloth & footWear</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />Kitchen Appiance</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />New Arrivals</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />Laptop & Computer</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />Mobile & Cover</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />Accessories</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />Interior Design</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />Game & Sports</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />Furniture & Lighting</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />More</NavLink></li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;