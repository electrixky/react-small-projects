import {useEffect, useState} from "react";
import "./styles.css"

export default function LoadMoreData() {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const res = await response.json()

            if (res && res.products && res.products.length) {
                setProducts(prevData => [...prevData, ...res.products])
                setLoading(false)
            }

        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100) setDisableButton(true)
    }, [products]);

    if (loading) {
        return <div>Loading data...</div>
    }

    return <div className="load-more-container">
        <div className="product-container">
            {
                products && products.length ?
                    products.map(item => {
                        return <div className="product" key={item.id}>
                            <img src={item.thumbnail} alt={item.title}/>
                            <p>{item.title}</p>
                        </div>
                    }) : null
            }
        </div>
        <div className="button-container">
            <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
            {
                disableButton ? <p>You have reached 100 products</p> : null
            }
        </div>
    </div>
}