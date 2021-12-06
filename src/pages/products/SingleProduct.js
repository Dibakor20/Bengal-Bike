import React, { useState } from 'react';
import { useParams } from 'react-router';
import FakeData from '../../FakeData';
import ProductDetails from './ProductDetails';

const SingleProduct = () => {
    const { title } = useParams()
    const productDetails = FakeData.find((item) => item.title === title)
    
    return (
        <>
            <ProductDetails productData={ productDetails }/>
        </>
    );
};

export default SingleProduct;