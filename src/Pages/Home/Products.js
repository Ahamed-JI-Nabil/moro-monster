import React from 'react';
import useAllProducts from '../../Hooks/useAllProducts';
import Product from './Product';

const Products = () => {

    const [products] = useAllProducts()

    return (
        <div>
            {products.length}
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