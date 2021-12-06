import React from 'react';
import { faStar, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ProductDetails = (props) => {
  
    const { id, img, title,discountPrice,price } = props.productData;
    
    return (
        <>
            <div className="product-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <img src={img} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="product-content">
                                <h1>{title}</h1>
                                <div>
                                    <p className="price"><span>{discountPrice}</span>{price}</p>
                                    <div class="review">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <p>(34 Reviews)</p>
                                </div>
                                </div>
                                <p className="short_des">
                                Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.
                               </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;