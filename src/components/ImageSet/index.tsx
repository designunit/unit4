import { constant, times } from 'lodash'
import { ImageColumnsLayout } from './ImageColumnsLayout'

export interface IImageSetLayout {
    span: number[]
}

export type ImageSetProps = {
    items: string[]
    layout?: IImageSetLayout
    style?: React.CSSProperties
    width?: number
    height?: number
}

export const ImageSet: React.FC<ImageSetProps> = props => {
    const length = props.items.length
    const layout = props.layout as IImageSetLayout
    const span = layout === undefined || layout.span === undefined
        ? times(length, constant(24 / length))
        : layout.span

    return (
        <ImageColumnsLayout
            items={props.items}
            span={span}
            style={props.style}
            width={props.width}
            height={props.height}
        />
    )
}
