import s from './image-set.module.css'

import Image from 'next/legacy/image'

export type ImageColumnsLayoutProps = {
    items: { src: string, alt: string }[]
    span: number[]
    style?: React.CSSProperties
    width?: number
    height?: number
}

export const ImageColumnsLayout: React.FC<ImageColumnsLayoutProps> = ({ style, items, span, width, height }) => (
    <div
        className={s.container}
        style={{
            gap: 16,
            ...style,
        }}
    >
        {items.map((x, i) => (
            <Image
                key={i}
                src={x.src}
                alt={x.alt}
                width={width}
                height={height}
                style={{
                    gridColumnEnd: `span ${span[i]}`,

                    objectFit: 'cover',
                    width: '100%',
                    height: 'auto',
                }}
            />
        ))}
    </div>
)
