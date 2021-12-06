import React from 'react';
import DiscountAddThree from '../../advertisement/DiscountAddThree';
import DiscountaddTwo from '../../advertisement/DiscountaddTwo';

const Features = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-3">

                    </div>
                    <div className="col-lg-5 col-md-6 px-0">
                        <DiscountaddTwo/>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <DiscountAddThree/>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Features;