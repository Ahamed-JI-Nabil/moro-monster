import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseModal from './PurchaseModal';


const Purchase = () => {

    const { id } = useParams()
    const [product, setProduct] = useState([])
    const url = `http://localhost:5000/product/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const { _id, productName, price, productDescription, availableQuantity, minimumOrderQuantity, imageUrl } = product
    const [isAvailable, setIsAvailable] = useState(false)
    const quantityRef = useRef('')

    const handleIsAvailable = () => {
        const quantity = quantityRef.current.value
        if (+availableQuantity < +quantity || +minimumOrderQuantity > +quantity) {
            setIsAvailable(false)
        }
        else {
            setIsAvailable(true)
        }
    }
    const [modal, setModal] = useState(null)

    const handleExistingQuantity = () => {


        const quantity = quantityRef.current.value
        const updateQuantity = parseInt(+availableQuantity) - parseInt(quantity)

        const updatedItemQuantity = { _id, productName, price, productDescription, availableQuantity: updateQuantity, minimumOrderQuantity, imageUrl }
        setProduct(updatedItemQuantity)

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItemQuantity),
        })
            .then(res => res.json())
            .then(data => {
                quantityRef.current.value = ''
            })

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200 px-10">
                <div className="hero-content flex-col lg:flex-row lg:mx-10">
                    <img src={imageUrl} className="rounded-lg w-96" alt='img' />
                    <div className='max-w-lg lg:ml-10'>
                        <h1 className="text-5xl font-bold leading-normal">{productName}</h1>
                        <p className="py-6">{productDescription}</p>
                        <h6 className='font-semibold leading-7'>Price: <span className='text-rose-500'>${price}/pec</span></h6>
                        <h6 className='font-semibold leading-7'>Available Quantity: <span className='text-rose-500'>{availableQuantity}</span></h6>
                        <h6 className='font-semibold leading-7'>Minimum Order Quantity: <span className='text-rose-500'>{minimumOrderQuantity}</span></h6>
                        <input onChange={handleIsAvailable} ref={quantityRef} type="number" placeholder="Order Quantity" className="input input-bordered input-sm w-full max-w-xs mt-2 font-semibold " />
                        {isAvailable ?
                            <div className='block mt-6'>
                                <label onClick={() => setModal(product)} for="purchase-modal" className=" modal-button bg-rose-800 text-gray-50 px-10 py-2 rounded-lg mt-4 hover:bg-rose-600">Purchase Now</label>
                            </div>
                            :
                            <p className=' mt-4 text-red-800 font-semibold'>You Can Place Order More Then Minimum Order Quantity and Less Then Available Quantity. Happy Shopping!!!</p>}
                    </div>
                </div>
            </div>
            {
                modal && <PurchaseModal
                    product={product}
                    quantityRef={quantityRef}
                    setModal={setModal}
                    handleExistingQuantity={handleExistingQuantity}
                ></PurchaseModal>
            }
        </div>
    );
};

export default Purchase;