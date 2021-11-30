import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const MainNav = () => {
  const screenWidth = window.innerWidth;
  return (
    <>
      <div className="main-nav py-md-5 bg-light-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6 order-1">
              <NavLink className="header-left" to="/">
                <span>Pixi</span>Shop
              </NavLink>
            </div>
            <div
              className={`col-md-6 ${
                screenWidth < 768 ? "order-3 my-3" : "order-2"
              }`}
            >
              <div class="input-group mt-2">
                <input
                  type="text"
                  class="form-control py-3"
                  placeholder="Search for products..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-dark-orange px-4"
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </div>
            <div
              className={`col-md-3 col-6 mt-2 ${
                screenWidth < 768 ? "order-2 my-3" : "order-3"
              }`}
            >
              <div className="d-flex align-items-center justify-content-center text-white">
                <FontAwesomeIcon className="nav-icon" icon={faUserAlt} />
                <span className="mx-3 ">
                  Sign In
                  <br />
                  Register
                </span>

                <FontAwesomeIcon
                  className="nav-icon ms-3"
                  icon={faShoppingCart}
                />
                <span className="badge badge-danger text-white">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
