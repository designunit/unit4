import NextImage from 'next/image'

export type ImageProps = {
    src: string
    alt?: string
    width?: number
    height?: number
    style?: React.CSSProperties
}

export const Image: React.FC<ImageProps> = ({ width = 16, height = 10, ...props }) => {
    return (
        <div
            style={props.style}
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
