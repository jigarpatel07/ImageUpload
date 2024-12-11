import React, { useEffect } from 'react'
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import "./slide.css"
import HorizontalScroll from './HorizontalScroll'
import axios from 'axios'
function Slide() {
    const images = [img1, img2, img3, img4]
    const handleWheel = (e) => {
        const container = e.currentTarget;
        container.scrollLeft += e.deltaY;
    };
    useEffect(() => {
        axios.get("http://localhost:5000/images")
            .then((res) => console.log({ res }))
            .catch((err) => console.log({ err }))
    }, [])
    return (
        <div
            className="flex gap-5 overflow-x-auto w-full  scrollbar-hide mt-10"
            onWheel={handleWheel}
        >
            {images.map((src, index) => (
                <HorizontalScroll src={src} key={index} />
            ))}
        </div>
    )
}

export default Slide
