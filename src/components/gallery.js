import React from 'react';

const IMG_COUNT = 41; // Change when adding/removing images!

const ImageGallery = () => {
    // Array to hold image elements JSX
    const images = [];

    // Loop to generate img elements
    for (let i = 1; i <= IMG_COUNT; i++) {
        images.push(
            <img
                key={i} // Add a unique key prop for each image
                src={`images/${i}.png`}
                alt={`Image ${i}`}
            />
        );
    }

    return (
        <div className="content" id="imageContainer">
            {images}
        </div>
    );
};

export default ImageGallery;
