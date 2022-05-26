import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, productName, price, availableQuantity, imageUrl } = product


    return (
        <div className='w-60 mx-auto my-6 border border-rose-900 p-7 rounded-md'>
            <div className=''>
                <img className='w-40 h-40 mx-auto' src={imageUrl} alt="" />
                <h4 className='font-medium mb-4'>{productName}</h4>
            </div>
            <div className='text-center'>
                <h6 className='font-semibold'>Price: {price}</h6>
                <h6 className='font-semibold'>Quantity: {availableQuantity}</h6>
            </div>
            <div className='flex justify-center items-stretch'>
                <Link to={`/updateitem/${_id}`}><button className='bg-rose-800 text-gray-50 px-6 py-1 rounded-lg mt-4 hover:bg-rose-600'>Buy Now</button></Link>
            </div>

        </div>
    );
};

export default Product;