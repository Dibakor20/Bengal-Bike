import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const ProductCardTwo = ({ product }) => {
    const { id, img, title, price, discountPrice } = product
    return (
        <>
               <div class="products-card-two d-flex  align-items-center">
                        <img src={img} alt=""  className='new-bike-img mx-2'/>
                        <div class="card_body">
                        <NavLink className="title-two"to={`/product/${title}`}>{title}</NavLink>
                    <h6 class="price-two">{ price}</h6>
                            <div class="review-two">
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />

                            </div>
                        </div>
                    </div>
        </>
    );
};

export default ProductCardTwo;