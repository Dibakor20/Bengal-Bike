import React from 'react';
import leftAdd from '../../assets/images/Addvertisement/add4.jpg';

const HomeLeftAdd = () => {
    return (
        <>
             <div class="left-add-section">
                    <img src={leftAdd} alt="" className="left-add-img"/>
                    <div className="add-left-text">
                        <p>ONLY FOR TO DAYS!</p>
                        <h5>GRAB OFFER UP TO<br/> 30% OFF</h5>
                    </div>
                </div>
        </>
    );
};

export default HomeLeftAdd;