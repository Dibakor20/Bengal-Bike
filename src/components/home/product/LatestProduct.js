import React from 'react';
import FakeData from '../../../FakeData';
import ProductsCard from '../../common/allCard/ProductsCard';
const LatestProduct = () => {
    return (
        <>
            <div className="latest-product my-5">
                <div className="container py-5">
                <div className="d-flex justify-content-between my-4">
                        <h2 className="main-title">Latest Bike</h2>
                        <h2 className="main-title">See All</h2>
                    </div>
                    <div className="product-section">
                        <div className="row">
                        {
                            FakeData.slice(0,6).map((product) =>
                                <div className="col-lg-2 col-md-3 col-6">
                                    <ProductsCard product={product }/>
                                </div>
                            )
                            }
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestProduct;