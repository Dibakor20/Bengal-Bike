import React from 'react';
import { Link } from 'react-router-dom';


const TopNavbar = () => {
    
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-gray">
            <hr className='border-secondary mt-2' />
            <div className="container">
                <Link className="navbar-brand text-white" to="/">English</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">SHOP</Link>
                            </li>
                            <li className="nav-item">
                    <Link className="nav-link" to="/">BLOG</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Delivery</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">SECURE PAYMENT</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            </div>
    );
};

export default TopNavbar;