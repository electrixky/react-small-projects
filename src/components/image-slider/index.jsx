import {useEffect, useState} from "react";
import {BsArrowLeftCircle, BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
import "./styles.css"

export default function ImageSlider({url, limit = 5, page = 1}) {

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoading(true)

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if (data) {
                setImages(data)
                setLoading(false)
            }

        } catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
        console.log(currentSlide)
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
        console.log(currentSlide)

    }

    useEffect(() => {
        if (url !== "") {
            fetchImages(url)
        }
    }, [url]);


    if (loading) {
        return <div>Loading... Please wait</div>
    }

    if (errorMsg !== null) {
        return <div>Some error occurred</div>
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
            {
                images && images.length ?
                    images.map((img, index) => {
                        return <img
                            key={img.id}
                            src={img.download_url}
                            alt={img.download_url}
                            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                        />
                    }) : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
            <span className="circle-indicators">
                {
                    images && images.length ?
                        images.map((_, index) => {
                            return <button
                                key={index}
                                className={currentSlide === index ? "current-indicator" : "current-indicator hide-current-indicator"}>
                                onClick={()=>setCurrentSlide(index)}
                            </button>
                        })
                        : null
                }
            </span>
        </div>
    )
}