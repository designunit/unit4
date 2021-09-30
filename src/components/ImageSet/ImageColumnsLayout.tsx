import s from './image-set.module.css'

import { Col, Row } from 'antd'
import Media from 'react-media'
import { ImageProps } from '@/types'
import { Image } from '@/components/Image'

export interface IImageSetProps {
    items: string[]
    span: number[]
    style?: React.CSSProperties
}

export const ImageColumnsLayout: React.FC<IImageSetProps> = props => (
    <div className={s.container} style={props.style}>
        <Row
            gutter={16}
        >
            {props.items.map((x, i) => (
                <Col span={props.span[i]} key={i}>
                    <Image
                        key={i}
                        src={x}
                    />
                </Col>
            ))}
        </Row>
        {/* <Media query={'screen and (max-width: 31.25em)'}>
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
        </Media> */}
    </div >
)
