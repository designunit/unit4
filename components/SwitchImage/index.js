import React, { useState } from 'react'
import Image from '../Image'
import './styles.less'

export default ({ images }) => {
    const [index, setIndex] = useState(0)

    const image = images[index]
    const buttonText = image.buttonText ? image.buttonText : 'Click'
    const nextIndex = (index + 1) % images.length

    return (
        <div className='switch-image'>
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