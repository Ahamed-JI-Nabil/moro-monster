import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, productName, price, availableQuantity, minimumOrderQuantity, imageUrl } = product

    const reting = <>
        <div class="rating">
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
        </div>
    </>

    return (
        <div className='w-60 mx-auto my-6 border border-rose-900 p-7 rounded-md'>
            <div className=''>
                <img className='w-40 h-40 mx-auto' src={imageUrl} alt="" />
                <h4 className='font-medium mb-4'>{productName}</h4>
            </div>
            <div className='text-center'>
                <h6 className='font-semibold leading-7'>Price: ${price}/pec</h6>
                <h6 className='font-semibold leading-7'>Available Quantity: {availableQuantity}</h6>
                <h6 className='font-semibold leading-7'>Min Order Quantity: {minimumOrderQuantity}</h6>
                {reting}
            </div>

            <div className='flex justify-center items-stretch'>
                <Link to={`/updateitem/${_id}`}><button className='bg-rose-800 text-gray-50 px-6 py-1 rounded-lg mt-4 hover:bg-rose-600'>Buy Now</button></Link>
            </div>

        </div>
    );
};

export default Product;