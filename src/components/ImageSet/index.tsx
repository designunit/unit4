import { constant, times } from 'lodash'
import * as React from 'react'
import { isUndefined } from 'util'
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
    items: string[]// Array<IImageProps | string>
    layout?: IImageSetLayout | {
        slider: IFotoramaOptions,
    }
}

export const ImageSet: React.FC<IImageSetProps> = props => {
    if (!isUndefined(props.layout) && 'slider' in props.layout) {
        return (
            <Fotorama
                items={props.items}
                options={props.layout.slider}
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
            items={props.items.map(getImage)}
            span={span}
        />
    )
}
