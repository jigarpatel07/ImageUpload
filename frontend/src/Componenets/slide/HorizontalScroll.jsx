import React, { useState } from 'react'
import axios from "axios"

function HorizontalScroll({ src }) {
  const [showBtn, setShowBtn] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleSaveImage = (imageSrc) => {
    console.log(imageSrc)
    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "image.jpg", { type: blob.type });
        const formData = new FormData();
        formData.append("image", file);

        axios
          .post("http://localhost:5000/saveImage", formData)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className='relative  w-[400px] h-auto flex-shrink-0'
        onMouseEnter={() => setShowBtn(true)}
        onMouseLeave={() => setShowBtn(false)}>
        <img
          src={src}
          alt={`img`}
          className="w-[400px] h-[300px] rounded-lg shadow-md"

        />
        {showBtn && <button className='absolute bottom-2 left-[50%] bg-black text-white p-2 rounded-md' onClick={() => setSelectedImage(src)}>show</button>}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/75 z-50 "
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-[90vw] max-h-[90vh] bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Large view"
              className="w-[700px] h-auto rounded-lg"
            />
            <button className='absolute bottom-2 left-[50%] bg-black text-white p-3 rounded-lg'
              onClick={() => handleSaveImage(selectedImage)}>Save image</button>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default HorizontalScroll 
