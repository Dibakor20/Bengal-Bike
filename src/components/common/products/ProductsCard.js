import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const ProductsCard = ({ product }) => {

    const { id, img, title, price, discountPrice } = product
    
    return (
        <>
             <div className="product-card">
                <div className="card-header">
                    <img src={img} alt="" className="product-img" />
                    <div className="card-icon">
                        <button  data-bs-toggle="modal" data-bs-target="#productAdding" className="add-btn">
                            <FontAwesomeIcon className="icon" icon={faCartPlus} />
                        </button>
                        <p className="on-sale">On <br />Sale!</p>
                    </div>
                </div>
                <div className="card-body">
                    <div className="review">
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />

                    </div>
                    <NavLink className="product-title"to={`/product/${title}`}>{title}</NavLink>

                    <p className="price"><span>{discountPrice}</span>{ price}</p>
                </div>
            </div>
        </>
    );
};

export default ProductsCard;