import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartArrowDown,
  faSearch,
  faUserAlt,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const MainNav = () => {
  const screenWidth = window.innerWidth;
  return (
    <>
      <div className="main-nav ">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 order-sm-1">
              <NavLink className="header-left" to="/">
                <span>Pixi</span>Shop
              </NavLink>
            </div>
            <div className={`col-md-6 ${screenWidth<768 ? 'order-sm-3 my-3' : 'order-sm-2' }`}>
              <div class="input-group mt-2">
                <input
                  type="text"
                  class="form-control py-3"
                  placeholder="Search for products..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-primary px-4"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>
            </div>
            <div className={`col-md-3 col-sm-6 mt-2 ${screenWidth<768  ? 'order-sm-2 my-3' : 'order-sm-3' }`}>
              <div className="d-flex align-items-center justify-content-center">
                <FontAwesomeIcon className="nav-icon" icon={faUserAlt} />
                <span className="mx-3">
                  Sign In
                  <br />& Register
                </span>

                <FontAwesomeIcon
                  className="nav-icon ms-3"
                  icon={faShoppingCart}
                />
                <span className="badge badge-danger text-dark">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
