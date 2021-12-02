import React from 'react';
import mainOffer from '../../../assets/images/Addvertisement/add6.jpg';

const UpCommingOffer = () => {
    return (
        <>
              <div class="upcomming-offer">
                    <div class="weekend">
                        Weekly <br/>Deal
                    </div>
           <div class="counter-card">
                        <div class="left">
                            <h3>Occaecat Voluptas</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem saepe sequi, repellat
                            </p>
                            <div class="start">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p class="price">
                                <span>$109.67</span>
                                <span>-6%</span>
                                <span>$92.87</span>
                            </p>
                            <div class="counter">
                                <p>
                                    <span>439</span> Days
                                </p>
                                <p>
                                    <span>10</span> Hours
                                </p>
                                <p>
                                    <span>53</span> Min
                                </p>
                                <p>
                                    <span>39</span> Sec
                                </p>
                            </div>
                            <button>Add to cart</button>
                </div>
                <div class="right">
                            <img src={mainOffer} alt="" srcset=""/>
                        </div>
                </div>
            </div>
     
        </>
    );
};

export default UpCommingOffer;