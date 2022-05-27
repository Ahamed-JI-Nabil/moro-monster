import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    const { id } = useParams()

    const [product, setProduct] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const { _id, productName, price, productDescription, availableQuantity, minimumOrderQuantity, imageUrl } = product

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 px-10">
                <div className="hero-content flex-col lg:flex-row lg:mx-10">
                    <img src={imageUrl} className="rounded-lg w-96" alt='img' />
                    <div className='max-w-lg'>
                        <h1 className="text-5xl font-bold">{productName}</h1>
                        <p className="py-6">{productDescription}</p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;