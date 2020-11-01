import { constant, times } from 'lodash'
import * as React from 'react'
import { isUndefined } from 'util'
import { resizeImage } from '../../lib/image'
import { Fotorama, IFotoramaOptions } from '../Fotorama'
import { IImageProps, Image } from '../Image'
import { ImageColumnsLayout } from './ImageColumnsLayout'

export function getImage(item: string | IImageProps): IImageProps {
    if (typeof item === 'string') {
        return {
            src: item,
        }
    }

    return item
}

export interface IImageSetLayout {
    span: number[]
}

export interface IImageSetProps {
    size?: number
    items: string[]// Array<IImageProps | string>
    layout?: IImageSetLayout | {
        slider: IFotoramaOptions,
    }
    style?: React.CSSProperties
}

export const ImageSet: React.FC<IImageSetProps> = ({ size = 1500, ...props }) => {
    // const items = props.items

    const items = props.items.map(item => resizeImage(item, {
        h: size,
        w: size,
    }))

    if (!isUndefined(props.layout) && 'slider' in props.layout) {
        return (
            <Fotorama
                items={items}
                options={props.layout.slider}
                style={props.style}
            />
        )
    }

    const length = props.items.length
    const layout = props.layout as IImageSetLayout
    const span = isUndefined(layout)
        ? times(length, constant(24 / length))
        : layout.span

    return (
        <ImageColumnsLayout
            items={items.map(getImage)}
            span={span}
            style={props.style}
        />
    )
}
