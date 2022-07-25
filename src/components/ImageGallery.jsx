import React, { useState, useEffect} from "react";

const ImageGallery = ({urls}) => {

    console.log(urls)

    const [images, setImages] = useState();

    useEffect(() => {
        setImages(urls);
    }, [urls]);

    const deleteItem = index => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    }

    return (
        <div>
            {images.map((link, index) => (
                <div key={index}>
                    <img src={link} alt='pokemon'/>
                    <button onClick={() => deleteItem(index)}>X</button>
                </div>
            ))}
        </div>
    )
}

export default ImageGallery;