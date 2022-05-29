import React from 'react';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Products from './Products';
import Review from './Review';

const Home = () => {

    return (
        <div>
            <h2 className='text-center text-3xl font-bold mt-5'>Welcome To Moto<span className='text-rose-500'>Monster</span></h2>
            <Carousel></Carousel>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
        </div>
    );
};

export default Home;