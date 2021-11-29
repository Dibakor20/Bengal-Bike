import React from 'react';
import MainNav from '../../components/common/navbar/MainNav';
import TopNavbar from '../../components/common/navbar/TopNavbar';

const HomePage = () => {
    const screenWidth = window.innerWidth
    return (
        <>
            {
                screenWidth > 768 ?
                    <div>
                      <TopNavbar />
                      <MainNav />
                    </div> :
                    <div>
                      <MainNav />
                      <TopNavbar />
                    </div> 
            }
           
        </>
    );
};

export default HomePage;