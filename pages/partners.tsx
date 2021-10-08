import { Gallery } from '@/components/Gallery'
import { GalleryItemText } from '@/components/Gallery/GalleryItemText'
import { NextPage } from 'next'
import React from 'react'
import { Title } from '../src/components/Title'

const items = [
    {
        src: '/static/partners/городские проекты 1.svg',
        text: (
            <GalleryItemText
                title='Городские проекты'
                text='Фонд привлекает внимание к городским темам для формирования общественного запроса на удобные города и высокое качество жизни.'
            />
        ),
        href: 'https://city4people.ru/about-project',
    },
    {
        src: '/static/partners/ispring 1.svg',
        text: (
            <GalleryItemText
                title='iSpring'
                text='Разработчик решений для корпоративного обучения.'
            />
        ),
        href: 'https://www.ispring.ru/',
    },
    {
        src: '/static/partners/Агентство стратегического развития «ЦЕНТР» 1.svg',
        text: (
            <GalleryItemText
                title='Агенство стратегического развития “Центр”'
                text='Стратегическое развитие территорий и качества городской среды.'
            />
        ),
        href: 'https://www.centeragency.org/ru',
    },
    {
        src: '/static/partners/Knight Frank 1.svg',
        text: (
            <GalleryItemText
                title='Knight Frank'
                text='Агенство по недвижимости, консалтинг по жилой и коммерческой недвижимости.'
            />
        ),
        href: 'https://www.knightfrank.ru/',
    },
    {
        src: '/static/partners/включи волоколамск 1.svg',
        text: (
            <GalleryItemText
                title='Включи Волоколамск'
                text='Общественное движение жителей города Волоколамска.'
            />
        ),
        href: 'https://включиволоколамск.рф',
    },
    {
        src: '/static/partners/сергей киселев и ко 1.svg',
        text: (
            <GalleryItemText
                title='АМ Сергей Киселев и партнеры'
                text={null}
            />
        ),
        href: 'http://sk-p.ru/',
    },
    {
        src: '/static/partners/8 lines 1.svg',
        text: (
            <GalleryItemText
                title='8 линий'
                text={null}
            />
        ),
        href: 'http://www.llllllll.ru/',
    },
    {
        src: '/static/partners/STUDIO MISHIN 1.svg',
        text: (
            <GalleryItemText
                title='Studio mishin'
                text={null}
            />
        ),
        href: null,
    },
    {
        src: '/static/partners/Краснокамская администрация 1.svg',
        text: (
            <GalleryItemText
                title='Администрация Краснокамского городского округа'
                text={null}
            />
        ),
        href: null,
    },
    {
        src: '/static/partners/Нягань администрация 1.svg',
        text: (
            <GalleryItemText
                title='Администрация города Нягань'
                text={null}
            />
        ),
        href: null,
    },
    {
        src: '/static/partners/Питкяранта администрация 1.svg',
        text: (
            <GalleryItemText
                title='Администрация Питкярантского муниципального района'
                text={null}
            />
        ),
        href: 'http://апмр.рф/',
    },
    {
        src: '/static/partners/ВТура администрания 1.svg',
        text: (
            <GalleryItemText
                title='Администрация Городского округа Верхняя Тура'
                text={null}
            />
        ),
        href: 'https://www.v-tura.ru/',
    },
    {
        src: '/static/partners/gerb-min 1.svg',
        text: (
            <GalleryItemText
                title='Администрация Волховского района Ленинградской области'
                text={null}
            />
        ),
        href: null,
    },
    {
        src: '/static/partners/мла 1.svg',
        text: (
            <GalleryItemText
                title='МЛА+'
                text={null}
            />
        ),
        href: null,
    },
    {
        src: '/static/partners/knappt 1.svg',
        text: (
            <GalleryItemText
                title='knappt'
                text={null}
            />
        ),
        href: null,
    },
    {
        src: '/static/partners/центр компетенций 1.svg',
        text: (
            <GalleryItemText
                title='Центр компетенций'
                text={null}
            />
        ),
        href: null,
    },
    {
        src: '/static/partners/УЖКХ ГО Дербент 1.svg',
        text: (
            <GalleryItemText
                title='УЖКХ ГО Дербент'
                text={null}
            />
        ),
        href: null,
    },
    {
        src: '/static/partners/y2pjhthufgs_750_auto_jpg_5_80 1.svg',
        text: (
            <GalleryItemText
                title='АНО “Центр городского развития Мурманской области"'
                text={null}
            />
        ),
        href: null,
    },
    {
        src: '/static/partners/урбаника 1.svg',
        text: (
            <GalleryItemText
                title='ИТП урбаника'
                text={null}
            />
        ),
        href: null,
    },
    {
        src: '/static/partners/KINGLAB 1.svg',
        text: (
            <GalleryItemText
                title='KINGLAB'
                text={null}
            />
        ),
        href: 'https://kinglab.com/',
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
            mode='partners'
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
