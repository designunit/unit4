import Link from 'next/link'
import React from 'react'
import s from './table.module.css'

const table = [
    {
        name: 'Открытый международный конкурс Москомархитектуры и ГК «А101» на разработку концепции общественных пространств 100 га территории ЖК «Скандинавия»',
        href: 'https://architime.ru/competition/2017/competition280917nm.htm',
        status: 'первое место',
        year: '2017',
        location: 'Москва',
    },
    {
        name: 'Бульвар по ул. Карла Маркса Всероссийский конкурс лучших проектов создания комфортной городской среды Минстрой РФ',
        href: 'https://konkurs2018.gorodsreda.ru/',
        status: 'победитель грант 100 млн руб.',
        year: '2018',
        location: 'г. Чистополь, Республика Татарстан',
    },
    {
        name: 'Открытый всероссийский конкурс с международным участием на создание концепции туристского кластера',
        href: 'https://oymyakon.world/',
        status: 'второе место',
        year: '2019',
        location: 'с. Оймякон, Республика Саха (Якутия)',
    },
    {
        name: '«Московский тракт — купеческая улица древнейшего города» Всероссийский конкурс лучших проектов создания комфортной городской среды Минстрой РФ',
        href: 'https://konkurs2020.gorodsreda.ru/february',
        status: 'абсолютный победитель грант 50 млн. руб.',
        year: '2020',
        location: 'г. Волоколамск, Московская область',
    },
    {
        name: '«Центральный лес культуры и отдыха» Всероссийский конкурс лучших проектов создания комфортной городской среды Минстрой РФ',
        href: 'https://konkurs2020.gorodsreda.ru/',
        status: 'абсолютный победитель грант 100 млн. руб.',
        year: '2020',
        location: 'г. Нягань, Ханты-Мансийский автономный округ',
    },
    {
        name: '«Берег Сури - набережная реки Конда» Всероссийский конкурс лучших проектов создания комфортной городской среды Минстрой РФ',
        href: 'https://konkurs2020.gorodsreda.ru/',
        status: 'грант 80 млн. руб.',
        year: '2020',
        location: 'г. Урай, Ханты-Мансийский автономный округ',
    },
    {
        name: '«Питкяранта для людей» Всероссийский конкурс лучших проектов создания комфортной городской среды Минстрой РФ',
        href: 'https://konkurs2020.gorodsreda.ru/',
        status: 'грант 49,5 млн. руб.',
        year: '2020',
        location: 'г. Питкяранта, Республика Карелия',
    },
    {
        name: '«Верхнетуринская панорама» Всероссийский конкурс лучших проектов создания комфортной городской среды Минстрой РФ',
        href: 'https://konkurs.gorodsreda.ru/',
        status: 'грант 50 млн. руб.',
        year: '2021',
        location: 'г. Верхняя Тура, Свердловская область',
    },
    {
        name: '«Жемчужная площадь» Всероссийский конкурс лучших проектов создания комфортной городской среды Минстрой РФ',
        href: 'https://konkurs.gorodsreda.ru/',
        status: 'грант 50 млн. руб.',
        year: '2021',
        location: 'г. Кемь, Республика Карелия',
    },
]

export const Table = () => (
    <div
        className={s.container}
    >
        {table.map((x, i) => (
            <div
                key={i}
                style={{
                    display: 'flex',
                    flexFlow: 'nowrap',
                    alignItems: 'center',
                    justifyContent: 'stretch',
                }}
            >
                <Link
                    href={x.href}
                >
                    <a
                        className={s.name}
                    >
                        {x.name}
                    </a>
                </Link>
                <div
                    style={{
                        width: 0,
                        margin: '0 16px',
                        borderRight: 'solid 1px var(--color-background-opposite)',
                        alignSelf: 'stretch',
                    }} />
                <div
                    className={s.status}
                >
                    {x.status}
                </div>
                <div
                    className={s.mobileHidden}
                    style={{
                        width: 0,
                        margin: '0 16px',
                        borderRight: 'solid 1px var(--color-background-opposite)',
                        alignSelf: 'stretch',
                    }} />
                <div
                    className={s.mobileHidden}
                    style={{
                        flex: '0 0 10%',
                        textAlign: 'center',
                    }}
                >
                    {x.year}
                </div>
                <div
                    className={s.mobileHidden}
                    style={{
                        width: 0,
                        margin: '0 16px',
                        borderRight: 'solid 1px var(--color-background-opposite)',
                        alignSelf: 'stretch',
                    }} />
                <div
                    className={s.mobileHidden}
                    style={{
                        flex: '0 0 20%',
                        textAlign: 'center',
                    }}
                >
                    {x.location}
                </div>
            </div>
        ))}

    </div>

)