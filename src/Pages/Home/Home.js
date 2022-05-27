import React from 'react';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Products from './Products';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
        </div>
    );
};

export default Home;