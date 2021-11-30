import React from 'react';
import BannerSlider from './BannerSlider';
import RightBannerAdd from './RightBannerAdd';

const Banner = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-2 px-0">
                        <h3>Left - Sidebar</h3>
                    </div>
                    <div className="col-md-8 mb-5">
                        <BannerSlider/>
                    </div>
                    <div className="col-md-2">
                        <RightBannerAdd/>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Banner;