import React, { useEffect, useState } from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './styles.css'

const ImageSlider = ({url, limit = 5, page = 1}) => {

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errMsg, setErrMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await res.json()

            if (data) {
                setImages(data)
                setLoading(false)
            }
        } catch (err) {
            setErrMsg(err.message)
            setLoading(false)
        }
    }

    function handlePrev() {
        setCurrentSlide(
            currentSlide === 0
            ? images.length - 1
            : currentSlide - 1
        )
    }

    function handleNext() {
        setCurrentSlide(
            currentSlide === images.length - 1
            ? 0
            : currentSlide + 1

        )
    }

    useEffect(() => {
        if (url !== '') {
            fetchImages(url)
        }
    }, [url])

    console.log(images)

    if (loading) {
        return (
            <div>
                Loading data, please wait...
            </div>
        )
    }

    if (errMsg !== null) {
        return (
            <div>Error occurred, {errMsg}</div>
        )
    }

  return (
    <div className="container">
        <BsArrowLeftCircleFill 
            className = 'arrow arrow-left'
            onClick = {handlePrev} 
        />
        {
            images && images.length
            ? images.map((imageItem, index) => (
                <img 
                    key = {imageItem.id}
                    src = {imageItem.download_url} 
                    alt = {imageItem.download_url}
                    className = {
                        currentSlide === index
                        ? 'current-image'
                        : 'current-image hide-current-image'
                    } 
                />
            ))
            : null
        }
        <BsArrowRightCircleFill 
            className = 'arrow arrow-right'
            onClick = {handleNext} 
        />
        <span className="circle-indicators">
            {
                images && images.length
                ? images.map((_, index) => (
                    <button 
                        key = {index} 
                        className = {
                            currentSlide === index
                            ? '.current-indicator'
                            : 'current-indicator inactive-indicator'
                        } 
                        onClick = {() => setCurrentSlide(index)}
                    />
                ))
                : null
            }
        </span>
    </div>
  )
}

export default ImageSlider