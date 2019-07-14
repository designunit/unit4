import * as React from 'react'
import { isUndefined } from 'util'
import { times, constant } from 'lodash'
import { Row, Col } from 'antd'
import { Image, IImageProps } from '../Image'

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
            <Row
                gutter={16}
            >
                {props.items.map((x, i) => (
                    <Col span={span[i]} key={i}>
                        <Image {...getImage(x)} />
                    </Col>
                ))}
            </Row>

            {/* <Row>
            <Col md={8} xl={10}>
                Col1
            </Col>

            <Col md={8} xl={10}>
                Col1
            </Col>

            <Col md={8} xl={4}>
                Col1
            </Col>
        </Row> */}
        </div>
    )
}
