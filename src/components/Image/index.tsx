import NextImage from 'next/image'
import s from './index.module.css'

export type ImageProps = {
    src: string
    alt?: string
    width?: number
    height?: number
}

export const Image: React.FC<ImageProps> = ({ width = 16, height = 10, ...props }) => {
    return (
        <div
            className={s.image}
        >
            <NextImage
                src={props.src}
                alt={props.alt}
                width={width}
                height={height}
                layout={'responsive'}
                objectFit={'cover'}
            />
        </div>
    )
}
