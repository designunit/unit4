'use client'

import s from './carousel.module.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import React from 'react'
import { Arrow } from './Arrow'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

const Arrows: React.FC = () => {
    const swiper = useSwiper()
    return (
        <>
            <button
                className={`${s.arrow} ${s.left}`}
                onClick={() => swiper.slidePrev()}
            >
                <Arrow color="white" />
            </button>
            <button
                className={`${s.arrow} ${s.right}`}
                onClick={() => swiper.slideNext()}
            >
                <Arrow color="white" />
            </button>
        </>
    )
}

export type CarouselProps = {
    children: React.ReactNode
    style?: React.CSSProperties
}

const Carousel: React.FC<CarouselProps> = ({ children, style }) => (
    <Swiper
        style={style}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 7000 }}
        effect={'fade'}
        pagination={{
            bulletClass: `${s.bullet} swiper-pagination-bullet`,
            clickable: true,
        }}
        loop
    >
        {React.Children.map(children, (child, i) => (
            <SwiperSlide key={i}>
                {child}
            </SwiperSlide>
        ))}
        <Arrows />
    </Swiper>
)

export default Carousel
