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

export const Carousel: React.FC<CarouselProps> = props => (
    <Slider
        autoplay={true}
        effect={effect.get(props.transition) as any}
    >
        {props.images.map((x, i) => (
            <Image
                key={i}
                src={x.src}
                width={x.width}
                height={x.height}
            />
        ))}
    </Slider>
)
