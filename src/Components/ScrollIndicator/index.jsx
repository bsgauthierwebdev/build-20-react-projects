import React, { useEffect, useState } from 'react'
import './styles.css'

const ScrollIndicator = ({url}) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [scrollPct, setScrollPct] = useState(0)

    async function fetchData(getUrl) {
        try {
            setLoading(true)
            const res = await fetch(getUrl)
            const data = await res.json()

            if (data && data.products && data.products.length > 0) {
                setData(data.products)
                setLoading(false)
            }

        } catch (err) {
            console.log(err)
            setErrMsg(err.message)
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    function handleScrollPct() {
        console.log(
            document.body.scrollTop, 
            document.documentElement.scrollTop, 
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        )

        const howMuchScrolled = 
            document.body.scrollTop 
            || document.documentElement.scrollTop

        const height = 
            document.documentElement.scrollHeight 
            - document.documentElement.clientHeight

        setScrollPct((howMuchScrolled / height) * 100)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPct)
        return () => {
            window.removeEventListener('scroll', () => {})
        }
    }, [])

    console.log(data, scrollPct)

    if (errMsg) {
        return <div>Error occurred, {errMsg}</div>
    }

    if (loading) {
        return <div>Loading data...</div>
    }

  return (
    <>
        <div className="top-container">
            <h1>Custom Scroll Indicator</h1>
            <div className="scroll-progress-tracking-container">
                <div 
                    className="current-progress-bar"
                    style = {{width: `${scrollPct}%`}}
                ></div>
            </div>
        </div>
        <div className="data-container">
            {
                data && data.length > 0
                ? data.map((dataItem) => <p>{dataItem.title}</p>)
                : null
            }
        </div>
    </>
        
  )
}

export default ScrollIndicator