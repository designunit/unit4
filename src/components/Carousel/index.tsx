import { ImageProps } from '@/types'
import s from './index.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import React from 'react'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export type CarouselProps = {
    size?: number
    images: ImageProps[]
    style?: React.CSSProperties
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => (
    <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 7000 }}
        pagination={{
            bulletClass: `swiper-pagination-bullet ${s.bullet}`,
            clickable: true,
        }}
        navigation
        loop
    >
        {React.Children.map(children, (child, i) => (
            <SwiperSlide key={i}>
                {child}
            </SwiperSlide>
        ))}
    </Swiper >
)
