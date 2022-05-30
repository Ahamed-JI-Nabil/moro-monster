import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const navigate = useNavigate()

    const handleAddProducts = event => {
        event.preventDefault()

        const productName = event.target.productName.value
        const productDescription = event.target.productDescription.value
        const price = event.target.price.value
        const availableQuantity = event.target.availableQuantity.value
        const minimumOrderQuantity = event.target.minimumOrderQuantity.value
        const imageUrl = event.target.imageUrl.value

        const newProduct = { productName, productDescription, price, availableQuantity, minimumOrderQuantity, imageUrl }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                alert('Product Added Successfully')
                navigate('/')
                event.target.reset()
            })

    }


    return (
        <div className='h-fit'>
            <figure className="flex mt-6">
                <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">

                    <div className="mx-6 my-4">
                        <div className='text-center'>
                        </div>
                        <div className="flex items-center justify-center">
                            <h1 className="text-2xl font-medium mb-6">
                                Add A New Product
                            </h1>
                        </div>
                        <form onSubmit={handleAddProducts}>
                            <input
                                name="productName"
                                type="text"
                                placeholder="Product Name"
                                required
                                className={
                                    "w-full p-2 border rounded-md outline-none text-base transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <input
                                name="productDescription"
                                type="text"
                                placeholder="Products Description"
                                required
                                className={
                                    "w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <input
                                name="price"
                                type="number"
                                placeholder="Price"
                                required
                                className={
                                    "w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <input
                                name="availableQuantity"
                                type="number"
                                placeholder="Available Quantity"
                                required
                                className={
                                    "w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <input
                                name="minimumOrderQuantity"
                                type="text"
                                placeholder="Minimum Order Quantity"
                                required
                                className={
                                    "w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <input
                                name="imageUrl"
                                type="text"
                                placeholder="Image Link"
                                required
                                className={
                                    "w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <div className="flex items-center mt-3 justify-center">
                                <button
                                    className={
                                        "bg-rose-800 w-full text-gray-50 px-10 py-2 rounded-lg mt-6 hover:bg-rose-600"
                                    }
                                    value="Login"
                                >
                                    Add Product
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </figure>
        </div>
    );
};

export default AddProduct;