import React, { useState } from 'react'
import { Image } from '../../src/components/Image'

export default ({ images }) => {
    const [index, setIndex] = useState(0)

    const image = images[index]
    const buttonText = image.buttonText ? image.buttonText : 'Click'
    const nextIndex = (index + 1) % images.length

    return (
        <div className='switch-image'>
            <style jsx>{`
                button {
                    background-color: rgba(255, 0, 102, 1);
                    min-width: 200px;
                    border: none;
                    color: white;
                    padding: 2px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    cursor: pointer;
                }
            `}</style>

            <div className='image-text'>
                <button
                    onClick={() => setIndex(nextIndex)}
                >
                    {buttonText}
                </button>
            </div>

            <Image
                src={image.src}
                alt={image.alt}
            />
        </div>
    )
}