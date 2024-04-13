import React, { useEffect, useState } from 'react'
import './styles.css'

const LoadMoreData = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)

    async function fetchProcucts() {
        try {
            setLoading(true)
            const res = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${
                    count === 0 ? 0 : count * 20
                }`
            )

            const result = await res.json()

            if (result && result.products && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products])
                setLoading(false)
            }

            console.log(result)
            console.log(count)

        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProcucts()
    }, [count])

    useEffect(() => {
        if (products && products.length === 100) {
            setDisableButton(true)
        }
    }, [products])

    if (loading) {
        return <div>Loading data...</div>
    }

  return (
    <div className="load-more-container">
        <div className = 'product-container'>
            {
                products && products.length 
                ? products.map((item) => (
                <div className = 'product' key = {item.id}>
                    <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                    />
                    <p>{item.title}</p>
                    <p>{item.id}</p>
                </div>))
                : null
            }
        </div>
        <div className = 'button-container'>
            <button 
                disabled = {disableButton}
                onClick = {() => setCount(count + 1)}
            >
                Load More Products
            </button>
            {
                disableButton 
                ? <p>You have reached the end</p> 
                : null
            }
        </div>
    </div>
  )
}

export default LoadMoreData