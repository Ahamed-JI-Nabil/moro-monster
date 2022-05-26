import React from 'react';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;