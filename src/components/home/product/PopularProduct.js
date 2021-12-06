import React from 'react';
import FakeData from '../../../FakeData';
import DiscountAddOne from '../../advertisement/DiscountAddOne';
import ProductsCard from '../../common/products/ProductsCard';

const PopularProduct = () => {
    return (
        <>
             <div className="container my-5">
            <div className="my-4 d-flex justify-content-between">
                        <h3 className="main-title">Populars Bike</h3>
                        <h3 className="main-title">See All</h3>
                </div>
                <div className="row">
                    <div className="col-md-4  my-3">
                        <DiscountAddOne/>
                    </div>
                    <div className="col-md-8">
                        {
                             <div className="row">
                             {
                                 FakeData.slice(0,8).map((product) =>
                                     <div className="col-lg-3 col-md-4 col-6 my-3">
                                         <ProductsCard product={product }/>
                                     </div>
                                 )
                                 }
                                 </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularProduct;