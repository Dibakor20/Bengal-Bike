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


                    <div className="product_description">
                        <nav>
                            <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                <button className="nav-link active tab_btn" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav_description" type="button" role="tab" aria-controls="nav_description" aria-selected="true">Description</button>
                                <button className="nav-link tab_btn" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav_additional_info" type="button" role="tab" aria-controls="nav_additional_info" aria-selected="false">Additional Information</button>
                                <button className="nav-link tab_btn" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav_reviews" type="button" role="tab" aria-controls="nav_reviews" aria-selected="false">Reviews</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">

                            <div class="tab-pane fade show active" id="nav_description" role="tabpanel" aria-labelledby="nav-home-tab">
                                <h3>The standard Lorem Ipsum passage, used since the 1500</h3>

                                <p>
                                    Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which has since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance.
                                    <br />
                                    Creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which has since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance.
                                </p>

                                <h3>Contrary to popular belief, Lorem Ipsum is not simply random text.</h3>
                                <p>

                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>

                            </div>


                            <div class="tab-pane fade show " id="nav_additional_info" role="tabpanel" aria-labelledby="nav-home-tab">
                                <h4 style={{ color: 'red' }}>Feature coming soon...</h4>


                            </div>

                            <div class="tab-pane fade show " id="nav_reviews" role="tabpanel" aria-labelledby="nav-home-tab">

                                <h4 style={{ color: 'red' }}>Feature coming soon...</h4>

                            </div>


                        </div>

                    </div>
                    

                </div>
            </div>
        </>
    );
};

export default ProductDetails;