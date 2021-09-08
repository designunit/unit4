import { Gallery } from '@/components/Gallery'
import { NextPage } from 'next'
import React from 'react'
import { Title } from '../src/components/Title'

const items = [
    {
        // href: '/volokolamsk',
        src: 'https://s.tmshv.com/unit4/volokolamsk-04.jpg',
        text: <>
            <span>
                Без ссылки
            </span>
            <span>
                вторая строка
            </span>
        </>,
    },
    {
        href: '/latlng',
        src: 'https://s.tmshv.com/unit4/latlng-latlng.gif',
        text: 'latlng',
    },
    {
        href: '/ugra-edu',
        src: 'https://s.tmshv.com/unit4/edu_ugra-01.jpg',
        text: 'edu_ugra',
    },
    {
        href: '/uray-ppi',
        src: 'https://s.tmshv.com/unit4/uray_ppi-urai.jpg',
        text: 'uray_ppi',
    },
    {
        href: '/heterotopia',
        src: 'https://s.tmshv.com/unit4/heterotopia-heterotopia.gif',
        text: 'heterotopia',
    },
    {
        href: '/scnd-boulevard',
        src: 'https://s.tmshv.com/unit4/boulevard_scnd-boulevard.jpg',
        text: 'boulevard_scnd',
    },
    {
        href: '/scnd-park',
        src: 'https://s.tmshv.com/unit4/park_scnd-park.jpg',
        text: 'park_scnd',
    },
    {
        href: '/shelter',
        src: 'https://s.tmshv.com/unit4/shelter-01.jpg',
        text: 'shelter',
    },
    {
        href: '/swarm',
        src: 'https://s.tmshv.com/unit4/swarm-swarm.jpg',
        text: 'swarm',
    },
]

const Page: NextPage = () => (
    <>
        <Title
            crossed
        >
            ПАРТНЕРЫ
        </Title>

        <Gallery
            border
            style={{
                marginBottom: 50,
            }}
            items={items.map((x: any) => ({
                ...x,
                text: x.text,
            }))}
        />
    </>
)

export default Page
