import React from 'react';
import useAllProducts from '../../Hooks/useAllProducts';
import Product from './Product';

const Products = () => {

    const [products] = useAllProducts()

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-5'>Our <span className='text-rose-500'>Products</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-6 p-4 px-16'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;