import Image from 'next/image'
import times from 'lodash/times'
import constant from 'lodash/constant'

import s from './image-set.module.css'

export type ImageSetProps = {
    items: string[] | {src: string, alt: string}[]
    span?: number[]
    style?: React.CSSProperties
    width?: number
    height?: number
}

export const ImageSet: React.FC<ImageSetProps> = ({items, span, style, width, height}) => {
    const length = items.length
    const spans = span ?? times(length, constant(24 / length))

    return (
        <div
            className={s.container}
            style={{
                gap: 16,
                ...style,
            }}
        >
            {items
                .map(x => typeof x === 'object' ? x : {
                    src: x,
                    alt: x,
                })
                .map((x, i) => (
                    <Image
                        key={i}
                        src={x.src}
                        alt={x.alt}
                        width={width}
                        height={height}
                        style={{
                            gridColumnEnd: `span ${spans[i]}`,
        
                            objectFit: 'cover',
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                ))}
        </div>
    )
}
