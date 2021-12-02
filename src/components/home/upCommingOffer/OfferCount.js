import React from 'react';
import HomeLeftAdd from '../../advertisement/HomeLeftAdd';
import UpCommingOffer from './UpCommingOffer';

const OfferCount = () => {
    return (
        <>
             <div className="container mt-4 mt-md-5 mb-3">
                <div className="row">
                    <div className="col-lg-2 col-md-3 d-none d-lg-block  col-5 px-0">
                      <HomeLeftAdd/>
                    </div>
                    <div className="col-lg-8 col-md-9 col-7">
                        <UpCommingOffer/>
                    </div>
                    <div className="col-lg-2  col-md-3 d-none d-lg-block">
                    <HomeLeftAdd/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OfferCount;