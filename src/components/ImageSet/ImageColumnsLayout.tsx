import { Col, Row } from 'antd'
import * as React from 'react'
import Media from 'react-media'
import { IImageProps, Image } from '../Image'

export interface IImageSetProps {
    items: IImageProps[]
    span: number[]
    style?: React.CSSProperties
}

export const ImageColumnsLayout: React.FC<IImageSetProps> = props => (
    <div style={props.style}>
        <style jsx>{`
            div {
                width: 100%;
                display: flex;
                flex-direction: column;
            }
        `}</style>

        <Media query={'screen and (max-width: 31.25em)'}>
            {match => match
                ? (
                    props.items.map((x, i) => (
                        <Image {...x } />
                    ))
                ) : (
                    <Row
                        gutter={16}
                    >
                        {props.items.map((x, i) => (
                            <Col span={props.span[i]} key={i}>
                                <Image {...x} />
                            </Col>
                        ))}
                    </Row>
                )}
        </Media>
    </div >
)
