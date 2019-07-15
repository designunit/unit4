import { Col, Row } from 'antd'
import { constant, times } from 'lodash'
import * as React from 'react'
import Media from 'react-media'
import { isUndefined } from 'util'
import { IImageProps, Image } from '../Image'

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
    items: Array<IImageProps | string>
    layout?: IImageSetLayout
}

export const ImageSet: React.FC<IImageSetProps> = props => {
    const size = props.items.length
    const span = isUndefined(props.layout)
        ? times(size, constant(24 / size))
        : props.layout.span

    return (
        <div>
            <style jsx>{`
                div {
                    width: 100%;
                    display: flex;
                }
            `}</style>

            <Media query={'screen and (max-width: 31.25em)'}>
                {match => match
                    ? (
                        props.items.map((x, i) => (
                            <Image {...getImage(x)} />
                        ))
                    ) : (
                        <Row
                            gutter={16}
                        >
                            {props.items.map((x, i) => (
                                <Col span={span[i]} key={i}>
                                    <Image {...getImage(x)} />
                                </Col>
                            ))}
                        </Row>
                    )}
            </Media>
        </div >
    )
}
