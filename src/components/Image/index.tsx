import * as React from 'react'
import { resizeImage } from '../../lib/image'
import NextImage from 'next/image'
import s from './index.module.css'

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
        <div className={s.image}>
            <NextImage
                src={src}
                alt={props.alt}
                layout='fill'
                priority // without priority it breaks <Carousel> layout
            />
        </div>
    )
}
