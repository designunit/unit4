import { NextPage } from 'next'
import { Title } from '../src/components/Title'
import React from 'react'
import { Table } from '@/components/Index/Table'
import { DoubleBlock } from '@/components/Index/DoubleBlock'
import { RunningLine } from '@/components/RunningLine'
import { Flex } from '@/components/Flex'
import { Loud } from '@/components/Loud'
import Image from 'next/image'

const Page: NextPage = () => {
    const vertOffset = '6rem'

    return (
        <>
            <Loud as={'h1'}>
                студия средового дизайна
            </Loud>

            <div style={{
                position: 'relative',
            }}>
                <div style={{
                    marginTop: vertOffset,
                }} />

                <div
                    style={{
                        position: 'relative',
                        height: 250,
                        marginBottom: '4rem',
                    }}
                >
                    <Image
                        quality={100}
                        src={'/static/1.jpg'}
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                {/* <ThreeButton index={0} /> */}

                <Title as='h2'>
                    Средовое <br />
                    проектирование
                </Title>

                <div>
                    <DoubleBlock
                        left={[
                            'проекты городской среды',
                            'мастерпланы развития территорий',
                            'экспертиза средовых проектов',
                            'разработка дизайн-кода',
                            'проекты образовательных сред',
                        ]}
                        right={(
                            <>
                                <div>
                                    Сейчас по нашим проектам реализуются центральные пространства в нескольких городах: городской пляж и приморский парк в Дербенте, главная улица и скверы Питкяранты, набережная в Урае, лесопарк в Нягани, центральная улица в Волоколамске, а также территории двух жилых комплексов в Москве.
                                </div>
                                <div>
                                    В Чистополе под нашим авторским надзором реализован проект реконструкции бульвара по Президентской программе Республики Татарстан. В результате мы прошли путь от первых скетчей до реализации с разработкой деталей уличного оборудования и уже три года получаем фидбек от проекта, который продолжает развиваться.
                                </div>
                            </>
                        )}
                    />
                </div>

                <div
                    style={{
                        margin: '4rem 0',
                    }}
                />

                <div
                    style={{
                        position: 'relative',
                        height: 250,
                        marginBottom: '4rem',
                    }}
                >
                    <Image
                        quality={100}
                        src={'/static/2.jpg'}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='left center'
                    />
                </div>
                {/* <ThreeButton index={1} /> */}

                <Title as={'h2'}>
                    Образование
                </Title>

                <div>
                    <DoubleBlock
                        left={[
                            'образовательные программы',
                            'профессиональные воркшопы',
                            'тематические экскурсии',
                            'организация цеховых конференций',
                        ]}
                        right={(
                            <>
                                <div>
                                    Образование во всех смыслах становится базовым компонентом жизни студии: как внутри, так и снаружи. Создание обучающих программ, конференций и воркшопов, экспертное участие в международных грантовых проектах и конкурсах интегрируются в рабочий процесс, становясь его неотъемлемой частью.
                                </div>
                            </>
                        )}
                    />
                </div>

                <div
                    style={{
                        margin: '4rem 0',
                    }}
                />

                <div
                    style={{
                        position: 'relative',
                        height: 250,
                        marginBottom: '4rem',
                    }}
                >
                    <Image
                        quality={100}
                        src={'/static/3.jpg'}
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                {/* <ThreeButton index={2} /> */}

                <Title as={'h2'}>
                    Софт
                </Title>

                <div>
                    <DoubleBlock
                        left={[
                            'инструменты городских исследований ',
                            'софт оптимизации процесса проектирования',
                        ]}
                        right={(
                            <>
                                <div>
                                    В каждом проекте мы стремимся создавать особые фичи для оптимизации процесса проектирования. Такая специфика предприятия позволяет сфокусироваться на деталях дизайн-решений.
                                </div>
                            </>
                        )}
                    />
                </div>
            </div>

            <div style={{ height: vertOffset, paddingTop: '4rem' }} >
                <RunningLine>
                    <h2
                        style={{
                            textTransform: 'uppercase',
                            fontSize: 46,
                            margin: '0',
                            color: 'black',
                        }}
                    >
                        команда студии / plug-in структура / команда студии / plug-in структура / команда студии / plug-in структура / команда студии / plug-in структура /
                    </h2>
                </RunningLine>
            </div>

            <div style={{ height: '12rem' }} />

            <Flex>
                <ul>
                    {[
                        ['Данияр Юсупов', 'главный архитектор студии'],
                        ['Владимир Петросян', 'генеральный директор'],
                        ['Надежда Кузнецова', 'главный архитектор'],
                        ['Елизавета Владимирова', 'главный архитектор'],
                    ].map(([name, rang]) => <div><span style={{ fontWeight: 'bold' }}>{name}</span> : : {rang}</div>)}
                </ul>
                <ul>
                    {[
                        ['Сергей Барышев', 'дизайнер'],
                        ['Роман Тимашев', 'разработчик'],
                        ['Григорий Балуев', 'разработчик'],
                        ['Арсений Юсупов', 'разработчик'],
                        ['Александр Петросян', 'разработчик'],
                        ['Алена Чеусова', 'архитектор'],
                        ['Анастасия Матюшонок', 'архитектор'],
                        ['Виктория Бинковская', 'архитектор'],
                        ['Роберт Галиакбаров', 'архитектор'],
                    ].map(([name, rang]) => <div><span style={{ fontWeight: 'bold' }}>{name}</span> : : {rang}</div>)}
                </ul>
            </Flex>

            <p style={{ padding: 'var(--content-padding)' }}>
                С нами работали: Анастасия Славина, Анита Попова, Артем Никитин, Валера Газаров, Вероника Серебрякова, Виктор Сергеев, Даниил Савинский, Джульетта Боброва, Катя Попова, Евгений Щукин, Елизавета Челнокова, Кирилл Петров, Макс Птица, Марина Цай, Михаил Палькин, Никита Сидоров, Николай Медведенко, Оля Чернякова, Петр Шуба, Соня Шишкина, Эдуард Лефлер
            </p>

            <div style={{
                marginTop: vertOffset,
            }} />

            <Title as={'h2'}>
                Победы в конкурсах
            </Title>

            <Table />

            <DoubleBlock
                left={[]}
                right={(
                    <>
                        <div
                            style={{
                                margin: '4rem 0',
                            }}
                        >
                            В своих проектах мы создаем добавленное качество материального окружения. Важно конструировать такие пространства, которые не только поддерживают уже сложившиеся практики, но и инициируют новые.
                        </div>
                    </>
                )}
            />

            <div style={{
                marginTop: vertOffset,
            }} />
        </>
    )
}

// export const getStaticProps: GetStaticProps = async () => {
// export const setServerSideProps: GetServerSideProps = async () => {
//     return {
//         props: {
//             namespacesRequired: ['common'],
//         }
//     }
// }

// export default withTranslation('common')(Page)
export default Page
