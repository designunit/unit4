import * as React from 'react'

export interface IImageProps {
    src: string
    alt: string
}

export const Image: React.FC<IImageProps> = ({ src, alt }) => (
    <div className='image'>
        <style jsx>{`
            img {
                width: 100%;
            }
        `}</style>
        
        <img
            src={src}
            alt={alt}
        />
    </div>
)
