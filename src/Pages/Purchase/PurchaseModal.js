import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurchaseModal = ({ product, quantityRef, setModal, handleExistingQuantity }) => {
    const { _id, productName, price, imageUrl } = product
    const [user] = useAuthState(auth)
    const quantity = quantityRef.current.value
    const time = new Date().toDateString()

    const handleConfirmOrder = event => {
        event.preventDefault()

        const orderDetails = {
            Id: _id,
            Name: productName,
            price,
            imageUrl,
            userName: user.displayName,
            userEmail: user.email,
            userPhone: event.target.phone.value,
            userAddress: event.target.address.value,
            orderedQuantity: quantity,
            orderedTime: time
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                handleExistingQuantity()
                setModal(null)
            })


    }


    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{productName}</h3>
                    <form onSubmit={handleConfirmOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="quantity" placeholder="Ordered Quantity" disabled value={quantity} className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Confirm Order" className="bg-rose-800 text-gray-50 px-10 py-2 rounded-lg mt-4 hover:bg-rose-600 w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;