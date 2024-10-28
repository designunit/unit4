'use client'

import type { ImageProps } from '@/types'
import s from './carousel.module.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import React from 'react'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

type ArrowProps = {
    color: string
}

const Arrow: React.FC<ArrowProps> = ({ color }) => (
    <svg width="60" height="37" viewBox="0 0 120 74" xmlns="http://www.w3.org/2000/svg">
        <path
            fill={color}
            stroke="none"
            d="M 112.643669 44.125885 L 119.769554 37 L 83 0.230446 L 75.874123 7.356331 L 100.517784 32 L 0 32 L 0 42 L 100.517784 42 L 75.874123 66.643669 L 83 73.769554 L 112.643669 44.125885 Z"
        />
    </svg>
)

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
    size?: number
    images: ImageProps[]
    style?: React.CSSProperties
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 7000 }}
                effect={'fade'}
                pagination={{
                    bulletClass: `${s.bullet} swiper-pagination-bullet`,
                    // bulletClass: s.bullet,
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
        </>
    )
}

export default Carousel
