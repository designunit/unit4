import type { ImageProps } from '@/types'
import s from './index.module.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import React from 'react'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

const Arrows: React.FC = () => {
    const swiper = useSwiper()
    return (
        <>
            <div
                className={s.left}
                onClick={() => swiper.slidePrev()}
            />
            <div
                className={s.right}
                onClick={() => swiper.slideNext()}
            />
        </>
    )
}

export type CarouselProps = {
    children: React.ReactNode
    size?: number
    images: ImageProps[]
    style?: React.CSSProperties
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 7000 }}
            pagination={{
                bulletClass: `swiper-pagination-bullet ${s.bullet}`,
                clickable: true,
            }}
            loop
        >
            <Arrows />
            {React.Children.map(children, (child, i) => (
                <SwiperSlide key={i}>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper >
    )
}
