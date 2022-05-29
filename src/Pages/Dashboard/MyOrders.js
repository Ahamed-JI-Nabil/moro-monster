import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderTable from './OrderTable';

const MyOrders = () => {

    const [userOrders, setUserOrders] = useState([])

    const [user] = useAuthState(auth)

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setUserOrders(data))
    }, [])


    return (
        <div className="relative overflow-x-auto shadow-md">
            <table className="w-full text-sm text-left ">
                <thead className="text-xs  uppercase  dar ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>

            </table>
            {
                userOrders.map(order => <OrderTable
                    key={order._id}
                    order={order}
                ></OrderTable>)

            }
        </div>
    );
};

export default MyOrders;