import { Gallery } from '@/components/Gallery'
import { NextPage } from 'next'
import React from 'react'
import { Title } from '../src/components/Title'

const ItemText = ({ title, text }) => (
    <>
        <span
            style={{
                fontSize: 17,
                textTransform: 'uppercase',
                marginBottom: '.5rem',
            }}
        >
            {title}
        </span>
        <span
            style={{
                fontSize: 12,
                lineHeight: '19px',
                textDecoration: 'none',
            }}
        >
            {text}
        </span>
    </>
)

const items = [
    {
        src: '/static/partners/городские проекты 1.svg',
        text: (
            <ItemText
                title='Городские проекты'
                text='Фонд привлекает внимание к городским темам для формирования общественного запроса на удобные города и высокое качество жизни.'
            />
        ),
        href: 'https://city4people.ru/about-project',
    },
    {
        src: '/static/partners/ispring 1.svg',
        text: (
            <ItemText
                title='iSpring'
                text='Разработчик решений для корпоративного обучения.'
            />
        ),
        href: 'https://www.ispring.ru/',
    },
    {
        src: '/static/partners/Агентство стратегического развития «ЦЕНТР» 1.svg',
        text: (
            <ItemText
                title='Агенство стратегического развития “Центр”'
                text='Стратегическое развитие территорий и качества городской среды.'
            />
        ),
        href: 'https://www.centeragency.org/ru',
    },
    {
        src: '/static/partners/Knight Frank 1.svg',
        text: (
            <ItemText
                title='Knight Frank'
                text='Агенство по недвижимости, консалтинг по жилой и коммерческой недвижимости.'
            />
        ),
        href: 'https://www.knightfrank.ru/',
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
            imgStyle={{
                objectFit: 'contain',
                padding: 10,
            }}
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
