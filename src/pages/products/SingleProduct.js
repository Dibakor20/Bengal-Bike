import React from 'react';
import { useParams } from 'react-router';
import AddOffer from '../../components/advertisement/AddOffer';
import Footer from '../../components/common/footer/Footer';
import TopNavbar from '../../components/common/navbar/TopNavbar';
import FakeData from '../../FakeData';
import ProductDetails from './ProductDetails';

const SingleProduct = () => {
    const { title } = useParams()
    const productDetails = FakeData.find((item) => item.title === title)
    
    return (
        <>  
            <TopNavbar />
            <div className='my-4'><AddOffer/></div>
            <ProductDetails productData={productDetails} />
            <Footer/>
        </>
    );
};

export default SingleProduct;