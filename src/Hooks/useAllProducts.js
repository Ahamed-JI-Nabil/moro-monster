import { useEffect, useState } from "react"


const useAllProducts = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('https://young-harbor-42670.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts]
}

export default useAllProducts;