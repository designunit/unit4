import s from './image-set.module.css'

import { Col, Row } from 'antd'
import { Image } from '@/components/Image'

export interface IImageSetProps {
    items: string[]
    span: number[]
    style?: React.CSSProperties
}

export const ImageColumnsLayout: React.FC<IImageSetProps> = props => (
    <>
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
        </div>
        <div className={s.containerMobile} style={props.style}>
            {props.items.map((x, i) => (
                <Row
                    key={i}
                    gutter={16}
                    justify='center'
                >
                    <Col span={24}>
                        <Image
                            src={x}
                        />
                    </Col>
                </Row>
            ))}
        </div>
    </>
)
