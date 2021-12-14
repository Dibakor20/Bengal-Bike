import React from 'react';
import AddOffer from '../../components/advertisement/AddOffer';
import Footer from '../../components/common/footer/Footer';
import MainNav from '../../components/common/navbar/MainNav';
import TopNavbar from '../../components/common/navbar/TopNavbar';
import Banner from '../../components/home/banner/Banner';
import Blog from '../../components/home/blogCard/Blog';
import Brand from '../../components/home/brand/Brand';
import Features from '../../components/home/feature/Features';
import LatestProduct from '../../components/home/product/LatestProduct';
import PopularProduct from '../../components/home/product/PopularProduct';
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
        <LatestProduct />
        <Features/>
        <PopularProduct/>
         <Blog/>
        <Brand />
        <Footer/>
        </>
    );
};

export default HomePage;