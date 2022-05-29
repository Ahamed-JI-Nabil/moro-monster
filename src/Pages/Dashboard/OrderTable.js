import React from 'react';

const OrderTable = ({ order }) => {

    const { _id, pName, price, imageUrl, userName, userEmail, userPhone, userAddress, orderedQuantity, orderedTime } = order

    const handleDeleteItem = _id => {

    }


    return (
        <div>
            <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left ">
                    <tbody>
                        <tr className="bg-white border-b ">
                            <th className="pl-6 pr-0 py-4 font-medium text-gray-900  ">
                                <img className='w-16 h-16' src={imageUrl} alt="" />
                            </th>
                            <th className="pl-6 pr-0 py-4 font-medium text-gray-900  ">
                                {pName}
                            </th>
                            <td className="px-6 py-4">
                                {orderedQuantity}
                            </td>
                            <td className="px-6 py-4">
                                {userName}
                            </td>
                            <td className="px-6 py-4">
                                ${price}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button onClick={() => handleDeleteItem(_id)} className='bg-gray-900 text-gray-50 px-6 py-1 rounded-lg'>Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderTable;