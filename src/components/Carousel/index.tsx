import { ImageProps } from '@/types'
import Image from 'next/image'
import { Carousel as Slider } from 'antd'

export type CarouselProps = {
    size?: number
    images: ImageProps[]
    style?: React.CSSProperties

    transition: 'slide' | 'crossfade'
    // autoplay?: boolean | number
    // allowfullscreen?: boolean
}

const effect = new Map([
    ['crossfade', 'fade'],
    ['slide', 'scrollx'],
])

const Left = (props) => (
    <div {...props}>
        <Image
            src={'/static/left.svg'}
            width={20}
            height={20}
        />
    </div>
)
const Right = (props) => (
    <div {...props}>
        <Image
            src={'/static/right.svg'}
            width={20}
            height={20}
        />
    </div>
)

export const Carousel: React.FC<CarouselProps> = ({ children, transition = 'crossfade' }) => (
    <Slider
        autoplay={true}
        effect={effect.get(transition) as any}
        arrows
        prevArrow={<Left />}
        nextArrow={<Right />}
    >
        {children}
    </Slider>
)
