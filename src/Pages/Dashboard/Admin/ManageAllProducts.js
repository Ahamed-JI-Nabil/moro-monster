import React from 'react';
import useAllProducts from '../../../Hooks/useAllProducts';

const ManageProducts = () => {


    const [products] = useAllProducts()

    return (
        <div className='mb-8'>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Minimum Order Quantity</th>
                            </tr>
                            {
                                products.map((product, index) =>
                                    <tr class="hover normal-case bg-white">
                                        <th>{index + 1}</th>
                                        <td className='normal-case'></td>
                                        <div class="avatar pl-2">
                                            <div class="mask mask-squircle w-12 h-12 ">
                                                <img src={product.imageUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <td>{product.productName}</td>
                                        <td className='text-rose-600'>${product.price}</td>
                                        <td className='text-center text-rose-600'>{product.availableQuantity}</td>
                                        <td className='text-center text-rose-600'>{product.minimumOrderQuantity}</td>
                                    </tr>
                                )
                            }
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;