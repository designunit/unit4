import { Gallery } from '@/components/Gallery'
import { GalleryItem } from '@/components/Gallery/GalleryItem'
import { resizeImage } from '@/lib/image'
import { NextPage } from 'next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Title } from '../src/components/Title'

const items = [
    {
        src: '/static/partners/урбаника.png',
        href: 'http://urbanica.spb.ru/',
    },
    {
        src: '/static/partners/мла.png',
        href: 'https://www.mlaplus.com/',
    },
    {
        src: '/static/partners/центр.png',
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
        src: '/static/partners/центр компетенций.png',
        href: 'https://gorsreda86.ugraces.ru/',
    },
    {
        src: '/static/partners/админ_краснокамск.png',
        href: 'http://krasnokamsk.ru/',
    },
    {
        src: '/static/partners/админ_нягань.png',
        href: 'http://www.admnyagan.ru/',
    },
    {
        src: '/static/partners/урай.png',
        href: 'https://uray.ru/',
    },
    {
        src: '/static/partners/центр городского развития.png', // 10
        href: 'https://www.instagram.com/centrgoroda51/',
    },
    {
        src: '/static/partners/волоколамск.png',
        href: 'https://включиволоколамск.рф/',
    },
    {
        src: '/static/partners/админ_дербент.png',
        href: 'http://derbent.ru/',
    },
    {
        src: '/static/partners/админ_тура.png',
        href: 'https://www.v-tura.ru/',
    },
    {
        src: '/static/partners/институт развития.png',
        href: 'https://irgsno.ru/',
    },
    {
        src: '/static/partners/админ_волхов.png',
        href: 'https://volkhov-raion.ru/',
    },
    {
        src: '/static/partners/админ_питкьяранта.png',
        href: 'http://апмр.рф/',
    },
    {
        src: '/static/partners/ispring.png',
        href: 'https://www.ispring.ru/',
    },
    {
        src: '/static/partners/сергей киселев.png',
        href: 'http://sk-p.ru/',
    },
    {
        src: '/static/partners/варламов.png',
        href: 'https://city4people.ru/about-project',
    },
    {
        src: '/static/partners/цементные джунгли.png', // 20
        href: 'https://cjungle.com/',
    },
    {
        src: '/static/partners/мишин.png',
        href: 'https://www.facebook.com/StudioMishin/',
    },
    {
        src: '/static/partners/эпишкола.png',
        href: 'http://epischool.ru/',
    },
    {
        src: '/static/partners/knappt.png',
        href: 'http://www.knappt.com/',
    },
    {
        src: '/static/partners/8линий.png',
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
                        smallLabel={x.smallLabel}
                        mode={'partners'}
                    />
                ))}
            </Gallery>
        </>
    )
}

export default Page
