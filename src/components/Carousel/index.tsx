import { ImageProps } from '@/types'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import s from './index.module.css'

export type CarouselProps = {
    size?: number
    images: ImageProps[]
    style?: React.CSSProperties
}

const Left = (props) => (
    <div
        {...props}
        className={s.arrow}
        style={{
            left: 10,
        }}
    >
        <Image
            src={'/static/left.svg'}
            width={20}
            height={20}
        />
    </div>
)
const Right = (props) => (
    <div
        {...props}
        className={s.arrow}
        style={{
            right: 10,
        }}
    >
        <Image
            src={'/static/right.svg'}
            width={20}
            height={20}
        />
    </div>
)

export const Carousel: React.FC<CarouselProps> = ({ children }) => (
    <Slider
        autoplay
        dots
        dotsClass={s.dots}
        prevArrow={<Left />}
        nextArrow={<Right />}
    >
        {children}
    </Slider>
)
