import s from './image-set.module.css'

import { Image } from '@/components/Image'

export interface IImageSetProps {
    items: string[]
    span: number[]
    style?: React.CSSProperties
    width?: number
    height?: number
}

export const ImageColumnsLayout: React.FC<IImageSetProps> = ({ style, items, span, width, height = width, ...props }) => (
    <>
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
                    style={{
                        gridColumnEnd: `span ${span[i]}`,
                    }}
                    src={x}
                    width={width}
                    height={height}
                />
            ))}
        </div>
    </>
)
