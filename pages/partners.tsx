import { Gallery } from '@/components/Gallery'
import { NextPage } from 'next'
import React from 'react'
import { Title } from '../src/components/Title'

const items = [
    {
        src: '/static/partners/городские проекты 1.svg',
        href: 'https://city4people.ru/about-project',
    },
    {
        src: '/static/partners/ispring 1.svg',
        href: 'https://www.ispring.ru/',
    },
    {
        src: '/static/partners/Агентство стратегического развития «ЦЕНТР» 1.svg',
        href: 'https://www.centeragency.org/ru',
    },
    {
        src: '/static/partners/Knight Frank 1.svg',
        href: 'https://www.knightfrank.ru/',
    },
    {
        src: '/static/partners/включи волоколамск 1.svg',
        href: 'https://включиволоколамск.рф',
    },
    {
        src: '/static/partners/сергей киселев и ко 1.svg',
        href: 'http://sk-p.ru/',
    },
    {
        src: '/static/partners/8 lines 1.svg',
        href: 'http://www.llllllll.ru/',
    },
    {
        src: '/static/partners/STUDIO MISHIN 1.svg',
        href: null,
    },
    {
        src: '/static/partners/Краснокамская администрация 1.svg',
        href: null,
    },
    {
        src: '/static/partners/Нягань администрация 1.svg',
        href: null,
    },
    {
        src: '/static/partners/Питкяранта администрация 1.svg',
        href: 'http://апмр.рф/',
    },
    {
        src: '/static/partners/ВТура администрания 1.svg',
        href: 'https://www.v-tura.ru/',
    },
    {
        src: '/static/partners/gerb-min 1.svg',
        href: null,
    },
    {
        src: '/static/partners/мла 1.svg',
        href: null,
    },
    {
        src: '/static/partners/knappt 1.svg',
        href: null,
    },
    {
        src: '/static/partners/центр компетенций 1.svg',
        href: null,
    },
    {
        src: '/static/partners/УЖКХ ГО Дербент 1.svg',
        href: null,
    },
    {
        src: '/static/partners/y2pjhthufgs_750_auto_jpg_5_80 1.svg',
        href: null,
    },
    {
        src: '/static/partners/урбаника 1.svg',
        href: null,
    },
    {
        src: '/static/partners/KINGLAB 1.svg',
        href: 'https://kinglab.com/',
    },
]

const Page: NextPage = () => (
    <>
        <Title>
            С кем работаем
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
