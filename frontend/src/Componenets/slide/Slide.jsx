import React, { useEffect } from 'react'
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import "./slide.css"
import HorizontalScroll from './HorizontalScroll'
import axios from 'axios'
function Slide() {
    // const images = [img1, img2, img3, img4]
    const images = [
        "https://images.all-free-download.com/images/thumbjpg/tree_meadow_nature_220408.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgQG1QYGl0AacuP5T3Eg3G3hZgubkz5lusgjydjCucRQSE9IQ6nQzm0y0YG8TaXrIxfk&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqyxBSROv5olS7XoI6wIFxfiOI9qQ8STvu7nve2a04l9hoChhUffoCO1CqZi56UugCgU&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuXpJf1diRoYXNfzW4ml3N7ntzY97ky1_1oaMsher22QyR8zf0o8g5eN3zTQ1jxyYccs&usqp=CAU"]
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
