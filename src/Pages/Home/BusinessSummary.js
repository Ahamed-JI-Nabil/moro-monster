import React from 'react';
import flag from '../../Images/icons/flags.png'
import shipped from '../../Images/icons/delivery-truck.png'
import client from '../../Images/icons/people.png'
import revenue from '../../Images/icons/economy.png'
import review from '../../Images/icons/comment.png'


const BusinessSummary = () => {
    return (
        <div className='my-20'>
            <div className='text-center uppercase '>
                <h2 className='text-3xl font-extrabold mb-4 '>Million Business <span className='text-rose-500'>Trust Us</span></h2>
                <h4 className='text-xl '>Try to understand user expectation</h4>
            </div>
            <div className="stats text-primary-content flex flex-col sm:flex-row ml-32 mt-16">
                <div className="stat">
                    <img className='w-20' src={flag} alt="" />
                    <div className="stat-value text-rose-700">72</div>
                    <h4 className="text-lg text-black font-bold mt-4">Countries</h4>
                </div>
                <div className="stat">
                    <img className='w-20' src={shipped} alt="" />
                    <div className="stat-value text-rose-700">2500+</div>
                    <h4 className="text-lg text-black font-bold mt-4">Shipment</h4>
                </div>
                <div className="stat">
                    <img className='w-20' src={client} alt="" />
                    <div className="stat-value text-rose-700">5000+</div>
                    <h4 className="text-lg text-black font-bold mt-4">Customers</h4>
                </div>
                <div className="stat">
                    <img className='w-20' src={revenue} alt="" />
                    <div className="stat-value text-rose-700">120M+</div>
                    <h4 className="text-lg text-black font-bold mt-4">Annual Revenue</h4>
                </div>
                <div className="stat">
                    <img className='w-20' src={review} alt="" />
                    <div className="stat-value text-rose-700">33K+</div>
                    <h4 className="text-lg text-black font-bold mt-4">Reviews</h4>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;