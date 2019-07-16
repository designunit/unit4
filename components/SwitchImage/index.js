import React, { useState } from 'react'
import { Image } from '../../src/components/Image'
import { Button } from '../../src/components/Button'

export default ({ images }) => {
    const [index, setIndex] = useState(0)

    const image = images[index]
    const buttonText = image.buttonText ? image.buttonText : 'Click'
    const nextIndex = (index + 1) % images.length

    return (
        <div className='switch-image'>
            <div className='image-text'>
                <Button
                    onClick={() => setIndex(nextIndex)}
                >
                    {buttonText}
                </Button>
            </div>

            <Image
                src={image.src}
                alt={image.alt}
            />
        </div>
    )
}