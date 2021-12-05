import React from 'react';
import sliderOne from '../../../assets/images/slider/slider-banner2.jpg';
import sliderTwo from '../../../assets/images/slider/slider-banner3.jpg';

const BannerSlider = () => {
    return (
        <>
         <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://stimg.cardekho.com/images/uploadimages/1637121305854/Desktop-Banner-English.jpg" class="d-block slider-img"  alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src="https://stimg.cardekho.com/images/uploadimages/1637121305854/Desktop-Banner-English.jpg" class="d-block slider-img" alt="..." />

                    </div>
                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>   
        </>
    );
};

export default BannerSlider;