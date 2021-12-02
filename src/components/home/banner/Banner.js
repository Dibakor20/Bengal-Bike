import React from 'react';
import Sidebar from '../../common/sidebar/Sidebar';
import BannerSlider from './BannerSlider';
import RightBannerAdd from './RightBannerAdd';

const Banner = () => {
    return (
        <>
            <div className="container mt-4 mt-md-5 mb-3">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-5 d-none d-md-block px-0">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-12 col-12 ">
                        <BannerSlider/>
                    </div>
                  
                </div>
            </div>
        </>
    );
};

export default Banner;