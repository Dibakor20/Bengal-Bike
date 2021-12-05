import React from "react";
import mainOffer from "../../../assets/images/Addvertisement/add6.jpg";

const UpCommingOffer = () => {
  return (
    <>
      <div className="new-offer">
        <div className="weekend">
          Weekly <br />
          Deal
        </div>
              <div className="row justify-content-center align-items-center h-100">
                  <div className="col-md-6 col-sm-7 mt-lg-0 mt-4 px-5">
                  <h3>Occaecat Voluptas</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem saepe sequi, repellat
                            </p>
                            <p className="price">
                                <span className="price-tag">$109.67</span>
                                <span className="discount-offer mx-2">-6%</span>
                                <span>$92.87</span>
                      </p>
                      <div className="d-flex offer-count">
                          <p className="text-center"><span className="border-round d-block">439</span>Days</p>
                          <p className="px-2 text-center"><span className="border-round d-block">439</span>hours</p>
                          <p className="px-2 text-center"><span className="border-round d-block">439</span>min</p>
                          <p className="px-2 text-center"><span className="border-round d-block">439</span>sec</p>
                      </div>
                  </div>
                  <div className="col-md-6 col-sm-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJjylDHJKNnIyWRpIycB8I6KaXDmpPylTtw&usqp=CAU" alt="" className="main-offer-img" />
                  </div>
        </div>
      </div>
    </>
  );
};

export default UpCommingOffer;
