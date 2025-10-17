import type { Metadata } from 'next'
import { Title } from '@/components/Title'
import { Flex } from '@/components/Flex'
import { DEFAULT_COVER, MAILTO, TEL, TELEPHONE, YANDEX_LOCATION } from '@/constants'
import { TextBlock } from '@/components/TextBlock'
import { Partners } from '@/components/Partners'
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
            <Hero />

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
                        ['Елизавета Антониади', 'ведущий архитектор, ГИС-аналитик'],
                        ['Денис Мамедов', 'архитектор, ГИС-аналитик'],
                        ['Евгений Шестаков', 'архитектор'],
                        ['Юля Кубракова', 'архитектор'],
                        ['Полина Артемченко', 'архитектор'],
                        ['Александра Мусина', 'архитектор'],
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
                С нами работали: Алена Чеусова, Анастасия Матюшонок, Анастасия Эсмонтова, Анастасия Славина, Александра Майкова, Анита Попова, Антон Фруслов, Артем Никитин, Валера Газаров, Валентина Ермолаева, Вероника Серебрякова, Виктор Сергеев, Виктория Бинковская, Виктория Пашкова, Глеб Шатько, Григорий Балуев, Джульетта Боброва, Евгений Щукин, Елизавета Челнокова, Кирилл Петров, Марина Васильева, Марина Рейзберг, Марина Цай, Милана Платонова, Михаил Палькин, Никита Сидоров, Николай Медведенко, Оля Чернякова, Павел Советников, Петр Шуба, Полина Мошель, Соня Шишкина, Роберт Галиакбаров, Эдуард Лефлер
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
                        {'ООО «дизайн юнит 4»'}
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
                        {'ООО «дизайн юнит 4»'}<br />
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
