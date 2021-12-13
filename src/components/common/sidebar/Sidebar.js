import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <>
            <div className="shop-category">
                <p className="category-item">
                    <FontAwesomeIcon className="icon me-2" icon={faBars} />
                    SHOP BY CATEGORY</p>
                <ul>
                    <li><NavLink className="link" to="/TVS"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />TVS</NavLink></li>
                    <li><NavLink className="link" to="/HONDA"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />HONDA</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />New Arrivals</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />Laptop & Computer</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />Mobile & Cover</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />New Arrivals</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />Laptop & Computer</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />Mobile & Cover</NavLink></li>
                 
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />More</NavLink></li>
                   
                </ul>
            </div>
        </>
    );
};

export default Sidebar;