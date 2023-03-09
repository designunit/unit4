import times from 'lodash/times'
import constant from 'lodash/constant'
import { ImageColumnsLayout } from './ImageColumnsLayout'

export type ImageSetLayout = {
    span: number[]
}

export type ImageSetProps = {
    items: string[]
    layout?: ImageSetLayout
    style?: React.CSSProperties
    width?: number
    height?: number
}

export const ImageSet: React.FC<ImageSetProps> = props => {
    const length = props.items.length
    const layout = props.layout as ImageSetLayout
    const span = layout === undefined || layout.span === undefined
        ? times(length, constant(24 / length))
        : layout.span

    return (
        <ImageColumnsLayout
            items={props.items.map(src => ({ src, alt: 'image' }))} // TODO: use real alt
            span={span}
            style={props.style}
            width={props.width}
            height={props.height}
        />
    )
}
