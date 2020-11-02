import { Col, Row } from 'antd'
import Media from 'react-media'
import { IImageProps } from '../Image'
import Image from 'next/image'

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
                        <Image
                            key={i}
                            src={x.src}
                            width={x.width}
                            height={x.height}
                        />
                    ))
                ) : (
                    <Row
                        gutter={16}
                    >
                        {props.items.map((x, i) => (
                            <Col span={props.span[i]} key={i}>
                                <Image
                                    key={i}
                                    src={x.src}
                                    width={x.width}
                                    height={x.height}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
        </Media>
    </div >
)
