import React from 'react';
import FakeData from '../../../FakeData';
import ProductsCard from '../../common/products/ProductsCard';
const LatestProduct = () => {
    return (
        <>
            <div className="latest-product">
                <div className="container my-5">
                <div className="d-flex justify-content-between">
                        <h2 className="main-title">New Product</h2>
                        <h2 className="main-title">See All</h2>
                    </div>
                    <div className="product-section">
                        {
                            FakeData.map((product) =>
                                <div className="col-md-2">
                                    <ProductsCard product={product }/>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestProduct;