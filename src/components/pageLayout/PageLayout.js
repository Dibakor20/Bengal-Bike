import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeData';
import AddOffer from '../advertisement/AddOffer';
import HomeLeftAdd from '../advertisement/HomeLeftAdd';
import Footer from '../common/footer/Footer';
import TopNavbar from '../common/navbar/TopNavbar';
import ProductCardTwo from '../common/products/ProductCardTwo';
import ProductsCard from '../common/products/ProductsCard';
import Sidebar from '../common/sidebar/Sidebar';
import LatestProduct from '../home/product/LatestProduct';
import UpCommingOffer from '../home/upCommingOffer/UpCommingOffer';

const PageLayout = ({ page }) => {
    const [brandBike, setBrandBike] = useState([])
    useEffect(() => {
         setBrandBike(FakeData.filter(bike=>bike?.category === page))
    }, [])
    console.log(brandBike)
    return (
        <>
            <div>
                <TopNavbar />
                <div className='my-3'>
                    <AddOffer/>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-2 px-0 col-md-3 d-none d-md-block '>
                            <HomeLeftAdd />
                            <div className='new-product-area'>
                            <h5 className='new-bike'>New Bike</h5>
                            {
                            FakeData.slice(0,5).map((product) =>
                                  <div className='my-3'> <ProductCardTwo product={product }/></div>
                            )
                                }
                            </div>
                        </div>
                        <div className='col-lg-10 col-md-9 '>
                            <h5 className='category-title mb-3'>{page} Bikes</h5>
                            <p className='category-description'>{ page} bikes price in Banglades starts at TK 41,015 for TVS XL100, which is the cheapest model. The most expensive TVS bike is Apache RR 310 priced at Rs 2.59 Lakh. Most popular models for TVS includes Jupiter (TK 66,273), Jupiter 125 (TK 73,400), Apache RTR 160 (TK 1.07 Lakh). Upcoming TVS bikes in India include Apache RTR 200 Fi E100 , Zeppelin R which are</p>
                        <div className='row'>
                        
                {
                        brandBike.map((bike) =>
                            <div className='col-lg-2 col-md-4 col-6 my-2'>
                                <ProductsCard product={bike} />
                            </div>)
                }
                    </div>
                        </div>
                   </div>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default PageLayout;