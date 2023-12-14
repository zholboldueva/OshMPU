import React, { useState, useCallback, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/base.css';
import '../styles/base-be.css';
import '../styles/reset.css';
import '../styles/awesome.css';
import Swiper from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.min.css'


const slides = [
    {
        title: 'HIT 2024',
        href: 'studium/studieninteressenten/orientierungsangebote/hochschulinfotage/',
        imageSrc: '/photos/slide8.jpg',
        altText: 'HIT 2024 Event',
    }, {
        title: 'HIT 2024',
        href: 'studium/studieninteressenten/orientierungsangebote/hochschulinfotage/',
        imageSrc: '/photos/slide1.jpg',
        altText: 'HIT 2024 Event',
    }, {
        title: 'HIT 2024',
        href: 'studium/studieninteressenten/orientierungsangebote/hochschulinfotage/',
        imageSrc: '/photos/slide2.jpg',
        altText: 'HIT 2024 Event',
    },
    {
        title: 'HIT 2024',
        href: 'studium/studieninteressenten/orientierungsangebote/hochschulinfotage/',
        imageSrc: '/photos/slide8.jpg',
        altText: 'HIT 2024 Event',
    }, {
        title: 'HIT 2024',
        href: 'studium/studieninteressenten/orientierungsangebote/hochschulinfotage/',
        imageSrc: '/photos/slide1.jpg',
        altText: 'HIT 2024 Event',
    }, {
        title: 'HIT 2024',
        href: 'studium/studieninteressenten/orientierungsangebote/hochschulinfotage/',
        imageSrc: '/photos/slide2.jpg',
        altText: 'HIT 2024 Event',
    },
    // Add more slides as needed
];

const SliderEvents = ({ sliderId }) => {
    useEffect(() => {
        // Initialize Swiper for the specific slider with a unique ID or class
        const swiper = new Swiper(`.${sliderId} `, {
            slidesPerView: 3,
            spaceBetween: 10,
            navigation: {
                nextEl: ` .swiper-button-next`,
                prevEl: ` .swiper-button-prev`,
            },
            pagination: {
                el: ` .swiper-pagination`,
                clickable: true,
            },
        });

        // Now you can access the Swiper instance to manually control it
        // Example: swiper.slideNext();

        // Add a cleanup function to destroy the Swiper instance when the component unmounts

    }, [sliderId]); // Include sliderId in the dependency array to re-initialize when it changes

    return (
        <section id="content-three" className="mt-6">
            <div class="content-container">
                <div id="c20274">
                    <h2 class="equate">Termine</h2>
                </div>

                <div class="news">
                    <div class="content-container p-0 mt-6">
                        <div className={`swiper-container w-100i  ${sliderId} swiper-container-initialized swiper-container-horizontal`} data-loop="false" data-carousel="swiper"
                         data-slides-per-view="3" data-space-between="10">
                            <div className="swiper-wrapper" data-slider="container" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                               

                                {slides.map((slide, index) => (
                                    <div key={index} className={`swiper-slide ${index === 0 ? 'swiper-slide-active' : ''}`} itemscope="itemscope" itemtype="http://schema.org/Article" 
                                    style={{ width: '410px', marginRight: '10px' }}>
                                        <a title={slide.title} href={slide.href}>
                                            <img src={slide.imageSrc} width="371" height="180" alt="" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <div className={`swiper-button-prev ${sliderId} `} data-slider="prev" tabIndex="0" role="button" aria-label="Previous slide" ></div>
                            <div className={`swiper-button-next ${sliderId}`} data-slider="next" tabIndex="0" role="button" aria-label="Next slide" ></div>
                            <div className={`swiper-pagination ${sliderId} swiper-pagination-clickable swiper-pagination-bullets`} data-slider="pagination"></div>
                        </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SliderEvents;
