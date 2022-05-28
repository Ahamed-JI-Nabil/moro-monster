import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';


const Purchase = () => {

    const { id } = useParams()

    const [product, setProduct] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const { productName, price, productDescription, availableQuantity, minimumOrderQuantity, imageUrl } = product

    const [isAvailable, setIsAvailable] = useState(true)

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

    const handleBuyNow = event => {
        event.preventDefault()


    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 px-10">
                <div className="hero-content flex-col lg:flex-row lg:mx-10">
                    <img src={imageUrl} className="rounded-lg w-96" alt='img' />
                    <div className='max-w-lg lg:ml-10'>
                        <h1 className="text-5xl font-bold">{productName}</h1>
                        <p className="py-6">{productDescription}</p>
                        <h6 className='font-semibold leading-7'>Price: <span className='text-rose-500'>${price}/pec</span></h6>
                        <h6 className='font-semibold leading-7'>Available Quantity: <span className='text-rose-500'>{availableQuantity}</span></h6>
                        <h6 className='font-semibold leading-7'>Minimum Order Quantity: <span className='text-rose-500'>{minimumOrderQuantity}</span></h6>
                        <input onChange={() => handleIsAvailable()} ref={quantityRef} type="number" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />
                        {isAvailable ? <button onClick={handleBuyNow} className="bg-rose-800 text-gray-50 px-10 py-2 rounded-lg mt-4 block hover:bg-rose-600" >Buy Now</button> : <button onClick={handleBuyNow} className="bg-rose-800 text-gray-50 px-10 py-2 rounded-lg mt-4 block hover:bg-rose-900" disabled >Buy Now</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;