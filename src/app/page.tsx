import type { Metadata } from 'next'
import { Title } from '@/components/Title'
import { Flex } from '@/components/Flex'
import Image from 'next/legacy/image'
import { DEFAULT_COVER, MAILTO, TEL, TELEPHONE, YANDEX_LOCATION } from '@/constants'
import { TextBlock } from '@/components/TextBlock'
import { Partners } from '@/components/Partners'
import Carousel from '@/components/Carousel'
import { Hero } from '@/components/Index/Hero'
import { IndexTables } from '@/components/Index/IndexTables'
import Link from 'next/link'
import s from '@/index.module.css'

export const metadata: Metadata = {
    title: 'design unit 4',
    description: 'Студия средового дизайна',
    openGraph: {
        images: [
            DEFAULT_COVER,
        ],
    },
}

const Page: React.FC = () => {
    const vertOffset = '6rem'

    return (
        <div className={s.container}>
            {/* <Loud as={'h1'}>
                студия средового дизайна
            </Loud> */}

            <Hero />

            <div style={{
                position: 'relative',
            }}>
            </div>
            <Carousel>
                <Image src="/static/1.jpg" width={1920} height={1080} alt="" />
                <Image src="/static/2.jpg" width={1920} height={1080} alt="" />
                <Image src="/static/3.jpg" width={1920} height={1080} alt="" />
            </Carousel>

            <IndexTables />

            <div id='team' style={{
                position: 'relative',
                top: '-2rem',
            }} />
            <Title as='h2'>
                команда
            </Title>

            <Flex>
                <ul>
                    {[
                        ['Данияр Юсупов', 'эксперт по стратегическому развитию  и пространственному планированию'],
                        ['Владимир Петросян', 'генеральный директор, выпусник программы Архитекторы.рф 2021'],
                        ['Елизавета Владимирова', 'главный архитектор проектов'],
                        ['Надежда Кузнецова', 'соучредитель'],
                    ].map(([name, rang], i) => (
                        <div key={i}>
                            <span style={{ fontWeight: 'bold' }}>{name}</span> : : {rang}
                        </div>
                    ))}
                </ul>
                <ul>
                    {[
                        ['Анастасия Эсмонтова', 'ведущий архитектор, конструктор'],
                        ['Елизавета Антониади', 'ведущий архитектор, ГИС-аналитик'],
                        ['Денис Мамедов', 'архитектор, ГИС-аналитик'],
                        ['Павел Советников', 'архитектор'],
                        ['Евгений Шестаков', 'архитектор'],
                        ['Юля Кубракова', 'архитектор'],
                        ['Полина Артемченко', 'архитектор'],
                        ['Полина Мошель', 'архитектор'],
                        ['Александра Мусина', 'архитектор'],
                        ['Виктор Сергеев', 'консультант по развитию'],
                        ['Сергей Барышев', 'графический дизайнер'],
                        ['Роман Тимашев', 'фулстек-разработчик'],
                        ['Арсений Юсупов', 'фронтенд-разработчик'],
                        ['Александр Петросян', 'бэкенд-разработчик'],
                        ['SISU', 'робот'],
                    ].map(([name, rang], i) => (
                        <div key={i}>
                            {name == 'SISU' ? (
                                <><Link href={'/sisu'} style={{ fontWeight: 'bold' }}>{name}</Link> : : {rang}</>
                            ) : (
                                <><span style={{ fontWeight: 'bold' }}>{name}</span> : : {rang}</>
                            )}
                        </div>
                    ))}
                </ul>
            </Flex>

            <p style={{ padding: 'var(--content-padding)' }}>
                С нами работали: Анастасия Славина, Анита Попова, Артем Никитин, Валера Газаров, Вероника Серебрякова, Виктор Сергеев, Даниил Савинский, Джульетта Боброва, Катя Попова, Евгений Щукин, Елизавета Челнокова, Кирилл Петров, Максим Птица, Марина Цай, Михаил Палькин, Никита Сидоров, Николай Медведенко, Оля Чернякова, Петр Шуба, Соня Шишкина, Эдуард Лефлер
            </p>

            <div style={{
                marginTop: vertOffset,
            }} />

            <div
                id='partners'
                style={{
                    position: 'relative',
                    top: '-2rem',
                }}
            />
            <Partners />

            <div id='contacts' />
            <Title as='h2' >
                КОНТАКТЫ
            </Title>

            <Flex col
                style={{
                    padding: 'var(--content-padding)',
                    gap: '1rem',
                }}
            >
                <TextBlock>
                    <b>
                        {'ООО "дизайн юнит 4"'}
                    </b>
                </TextBlock>

                <TextBlock>
                    <a href={MAILTO}>
                        inbox@unit4.io
                    </a>
                </TextBlock>

                <TextBlock>
                    <a
                        href={YANDEX_LOCATION}
                        target='_blank' rel="noreferrer"
                    >
                        {'ООО "дизайн юнит 4"'}<br />
                        Гражданская улица, 13-15<br />
                        Санкт-Петербург<br />
                        Россия
                    </a>
                </TextBlock>

                <TextBlock>
                    <a href={TEL}>
                        {TELEPHONE}
                    </a>
                </TextBlock>
            </Flex>
        </div>
    )
}

export default Page
