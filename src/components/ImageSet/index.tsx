import { ImageProps } from '@/types'
import { constant, times } from 'lodash'
import { ImageColumnsLayout } from './ImageColumnsLayout'

export interface IImageSetLayout {
    span: number[]
}

export interface IImageSetProps {
    size?: number
    items: ImageProps[]
    layout?: IImageSetLayout
    style?: React.CSSProperties
}

export const ImageSet: React.FC<IImageSetProps> = ({ size = 1500, ...props }) => {
    const length = props.items.length
    const layout = props.layout as IImageSetLayout
    const span = layout === undefined
        ? times(length, constant(24 / length))
        : layout.span

    return (
        <ImageColumnsLayout
            items={props.items}
            span={span}
            style={props.style}
        />
    )
}
