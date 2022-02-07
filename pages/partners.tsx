import { Gallery } from '@/components/Gallery'
import { GalleryItem } from '@/components/Gallery/GalleryItem'
import { resizeImage } from '@/lib/image'
import { NextPage } from 'next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Title } from '../src/components/Title'

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
        src: '/static/partners/centr.jpg',
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
        src: '/static/partners/centr comp.jpg',
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
        src: '/static/partners/centr myrmansk.jpg', // 10
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
        src: '/static/partners/institut nn.jpg',
        href: 'https://irgsno.ru/',
    },
    {
        src: '/static/partners/admin-vol.png',
        href: 'https://volkhov-raion.ru/',
    },
    {
        src: '/static/partners/admin-pit.png',
        href: 'http://апмр.рф/',
    },
    {
        src: '/static/partners/ispring.png',
        href: 'https://www.ispring.ru/',
    },
    {
        src: '/static/partners/kiselev.jpg',
        href: 'http://sk-p.ru/',
    },
    {
        src: '/static/partners/varlamov.png',
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
        src: '/static/partners/epishkola.jpg',
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
]

const Page: NextPage = () => {
    const { t } = useTranslation()

    return (
        <>
            <Title>
                {t('partners', { ns: 'menu' })}
            </Title>

            <Gallery
                mode='partners'
                style={{
                    marginBottom: 50,
                }}
            >
                {items.map((x: any, i: number) => (
                    <GalleryItem
                        key={x.src}
                        src={resizeImage(x.src, { w: 600, h: 600 })}
                        text={x.text}
                        alt={x.alt}
                        href={x.href}
                        mode={'partners'}
                    />
                ))}
            </Gallery>
        </>
    )
}

export default Page
