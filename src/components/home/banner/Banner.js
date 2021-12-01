import React from 'react';
import Sidebar from '../../common/sidebar/Sidebar';
import BannerSlider from './BannerSlider';
import RightBannerAdd from './RightBannerAdd';

const Banner = () => {
    return (
        <>
            <div className="container mt-4 mt-md-5 mb-3">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-5 px-0">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-8 col-md-7 col-7">
                        <BannerSlider/>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <RightBannerAdd/>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Banner;