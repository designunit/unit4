import * as React from 'react'
import { resizeImage } from '../../lib/image'

export interface IImageProps {
    size?: number
    src: string
    alt?: string
}

export const Image: React.FC<IImageProps> = ({ size = 1500, ...props }) => {
    const src = resizeImage(props.src, {
        h: size,
        w: size,
    })

    return (
        <div className='image'>
            <style jsx>{`
            img {
                width: 100%;
            }
        `}</style>

            <img
                src={src}
                alt={props.alt}
            />
        </div>
    )
}
