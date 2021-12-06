import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

const FeatureSidebar = () => {
    return (
        <>
           < div className="featur-sidebar">
                    <div className="card">
                        <p className="icons">
                            <FontAwesomeIcon className="icon" icon={faTruck} />

                        </p>
                        <div>
                            <h4>Fast Delivery</h4>
                            <p>Cras Imperdiet Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="card">
                        <p className="icons">
                            <FontAwesomeIcon className="icon" icon={faTruck} />
                        </p>
                        <div>
                            <h4>Fast Delivery</h4>
                            <p>Cras Imperdiet Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="card">
                        <p className="icons">
                            <FontAwesomeIcon className="icon" icon={faTruck} />
                        </p>
                        <div>
                            <h4>Fast Delivery</h4>
                            <p>Cras Imperdiet Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="card">
                        <p className="icons">
                            <FontAwesomeIcon className="icon" icon={faTruck} />

                        </p>
                        <div>
                            <h4>Fast Delivery</h4>
                            <p>Cras Imperdiet Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default FeatureSidebar;