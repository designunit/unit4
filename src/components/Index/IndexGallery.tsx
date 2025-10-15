'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Autoplay, EffectCoverflow, Grid } from 'swiper/modules'
import { type FC } from 'react'

import s from './indexGallery.module.css'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'
import { useIsMobile } from '@/hooks/useIsMobile'

const images = Array(18).fill(null)
    .map((_, i) => `/index/${i + 1}.${[2, 11].includes(i + 1) ? 'gif' : 'png'}`)

export const IndexGallery: FC = () => {
    const isMobile = useIsMobile()
    return (
        <>
            <Swiper
                modules={[Autoplay, Grid, EffectCoverflow]}
                loop
                centeredSlides
                slidesPerView={isMobile ? 1.5 : 2.5}
                autoHeight
                effect='coverflow'
                coverflowEffect={{
                    depth: 0,
                    rotate: 0,
                    slideShadows: false,
                    modifier: 1,
                    scale: .8,
                    stretch: 0,
                }}
                spaceBetween={isMobile ? '-6.5%' : '-4%'}
                // autoplay={{
                //     delay: 3000,
                //     pauseOnMouseEnter: true,
                // }}
                className={s.swiper}
            >
                {images.map((x, i) => (
                    <SwiperSlide
                        key={i}
                        className={s.slide}
                    >
                        <Image
                            src={x}
                            alt={''}
                            fill
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'top center',
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
