import React from 'react';
import AddOffer from '../../components/advertisement/AddOffer';
import MainNav from '../../components/common/navbar/MainNav';
import TopNavbar from '../../components/common/navbar/TopNavbar';
import Banner from '../../components/home/banner/Banner';
import BlogCard from '../../components/home/blogCard/BlogCard';
import Brand from '../../components/home/brand/Brand';
import OfferCount from '../../components/home/upCommingOffer/OfferCount';

const HomePage = () => {
    const screenWidth = window.innerWidth
    return (
        <>
            {
                screenWidth > 768 ?
                    <div>
                      <TopNavbar />
                      <MainNav />
                    </div> :
                    <div>
                      <MainNav />
                      <TopNavbar />
                    </div> 
            }
        <Banner />
        <AddOffer />
        <OfferCount />
        <BlogCard />
        <Brand/>
        </>
    );
};

export default HomePage;