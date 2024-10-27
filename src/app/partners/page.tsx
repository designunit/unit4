import { GalleryPartners, Item } from '@/components/GalleryPartners'
import type { NextPage } from 'next'
import React from 'react'
import { Title } from '@/components/Title'

const items = [
    {
        src: '/static/partners/urbanica.png',
        href: 'http://urbanica.spb.ru/',
    },
    {
        src: '/static/partners/mla.png',
        href: 'https://www.mlaplus.com/',
    },
    {
        src: '/static/partners/centr-100.jpg',
        href: 'https://www.centeragency.org/ru',
    },
    {
        src: '/static/partners/zeitplan.png',
        href: 'https://www.instagram.com/zeitplan_team/',
    },
    {
        src: '/static/partners/kf.png',
        href: 'https://www.knightfrank.ru/',
    },
    {
        src: '/static/partners/centr comp-100.jpg',
        href: 'https://gorsreda86.ugraces.ru/',
    },
    {
        src: '/static/partners/admin-kk.png',
        href: 'http://krasnokamsk.ru/',
    },
    {
        src: '/static/partners/admin-nya.png',
        href: 'http://www.admnyagan.ru/',
    },
    {
        src: '/static/partners/uray.png',
        href: 'https://uray.ru/',
    },
    {
        src: '/static/partners/centr myrmansk-100.jpg', // 10
        href: 'https://www.instagram.com/centrgoroda51/',
    },
    {
        src: '/static/partners/volokalamsk.png',
        href: 'https://включиволоколамск.рф/',
    },
    {
        src: '/static/partners/admin-derb.png',
        href: 'http://derbent.ru/',
    },
    {
        src: '/static/partners/admin-tura.png',
        href: 'https://www.v-tura.ru/',
    },
    {
        src: '/static/partners/institut nn-100.jpg',
        href: 'https://irgsno.ru/',
    },
    {
        src: '/static/partners/admin-vol.png',
        href: 'https://volkhov-raion.ru/',
    },
    {
        src: '/static/partners/pitkiaranta.jpg',
        href: 'http://апмр.рф/',
    },
    {
        src: '/static/partners/ispring.png',
        href: 'https://www.ispring.ru/',
    },
    {
        src: '/static/partners/kiselev-100.jpg',
        href: 'http://sk-p.ru/',
    },
    {
        src: '/static/partners/city project-100.jpg',
        href: 'https://city4people.ru/about-project',
    },
    {
        src: '/static/partners/concjung.png', // 20
        href: 'https://cjungle.com/',
    },
    {
        src: '/static/partners/mishin.png',
        href: 'https://www.facebook.com/StudioMishin/',
    },
    {
        src: '/static/partners/epishkola-100.jpg',
        href: 'http://epischool.ru/',
    },
    {
        src: '/static/partners/knappt.png',
        href: 'http://www.knappt.com/',
    },
    {
        src: '/static/partners/8l.png',
        href: 'http://www.llllllll.ru/',
    },
    {
        src: '/static/partners/kinglab.png',
        href: 'https://kinglab.com/',
    },
    {
        src: '/static/partners/sol.png',
        href: 'https://soliletsk.ru/',
    },
    {
        src: '/static/partners/institut.png',
        href: 'https://genplanmos.ru/',
    },
]

const Page: NextPage = () => (
    <>
        <Title>
            С нами работают
        </Title>

        <GalleryPartners style={{
            marginBottom: 50,
        }}>
            {items.map((x, i) => (
                <Item
                    key={x.src}
                    src={x.src}
                    alt={''}
                    href={x.href}
                />
            ))}
        </GalleryPartners>
    </>
)

export default Page
