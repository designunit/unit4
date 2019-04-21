import React, { useState } from 'react'
import Image from '../Image'

export default ({ images }) => {
    const [index, setIndex] = useState(0)

    const image = images[index]
    const buttonText = image.buttonText ? image.buttonText : 'Click'
    const nextIndex = (index + 1) % images.length

    return (
        <div className='switch-image'>
            <button
                onClick={() => setIndex(nextIndex)}
            >
                {buttonText}
            </button>

            <Image
                src={image.src}
                alt={image.alt}
            />
        </div>
    )
}