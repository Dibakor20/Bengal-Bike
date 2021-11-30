import React from 'react';
import Sidebar from '../../common/sidebar/Sidebar';
import BannerSlider from './BannerSlider';
import RightBannerAdd from './RightBannerAdd';

const Banner = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-2 px-0">
                        <Sidebar/>
                    </div>
                    <div className="col-md-8">
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