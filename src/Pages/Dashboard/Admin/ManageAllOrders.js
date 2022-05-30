import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])



    return (
        <div>
            <h2>Total Orders: {orders.length}</h2>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>User</th>
                                <th></th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Time</th>
                            </tr>
                            {
                                orders.map((order, index) =>
                                    <tr class="hover normal-case bg-white">
                                        <th>{index + 1}</th>
                                        <td className='normal-case'>{order.userEmail}</td>
                                        <div class="avatar pl-2">
                                            <div class="mask mask-squircle w-12 h-12 ">
                                                <img src={order.imageUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <td>{order.Name}</td>
                                        <td className='text-rose-600'>{order.orderedQuantity}</td>
                                        <td>{order.orderedTime}</td>
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

export default ManageAllOrders;