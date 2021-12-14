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
                    <li><NavLink className="link" to="/HERO"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />HERO</NavLink></li>
                    <li><NavLink className="link" to="/HONDA"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />HONDA</NavLink></li>
                    <li><NavLink className="link" to="/BAJAJ"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />BAJAJ</NavLink></li>
                  
                    <li><NavLink className="link" to="/YAMAHA"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />YAMAHA</NavLink></li>
                    <li><NavLink className="link" to="/SUZUKI"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />SUZUKI</NavLink></li>
                    <li><NavLink className="link" to="/ROYELENFIELD"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />Royal Enfield</NavLink></li>
                    <li><NavLink className="link" to="/BMW"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />BMW</NavLink></li>
                 
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon me-2" icon={faArrowRight} />More</NavLink></li>
                   
                </ul>
            </div>
        </>
    );
};

export default Sidebar;