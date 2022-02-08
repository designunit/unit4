import { NextPage } from 'next'
import { Title } from '../src/components/Title'
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'
import { Table } from '@/components/Index/Table'
import { ThreeButton, ThreeButtons } from '@/components/Index/ThreeButtons'
import { DoubleBlock } from '@/components/Index/DoubleBlock'
import { InView } from 'react-intersection-observer'
import Media from 'react-media'
import { RunningLine } from '@/components/Index/RunningLine'
import { Flex } from '@/components/Flex'
import { Loud } from '@/components/Loud'

const Page: NextPage = () => {
    const { t } = useTranslation()

    const vertOffset = '6rem'

    const [three, setThree] = useState<string>(null)

    return (
        <>
            <Loud>
                проектная студия<br />
                <span
                    style={{
                        textTransform: 'none'
                    }}
                >
                    design : : unit 4
                </span>
            </Loud>

            <div style={{
                position: 'relative',
            }}>
                <ThreeButtons
                    state={three}
                />

                <div style={{
                    marginTop: vertOffset,
                }} />
                <span id='enviromental-design'
                    style={{
                        position: 'relative',
                        bottom: '12rem',
                    }}
                />

                <Media query={'screen and (max-width: 31.25em)'}>
                    {match => match ? (
                        <ThreeButton index={0} />
                    ) : (

                        <Title writeToHead={false}>
                            Средовое <br />
                            проектирование
                        </Title>
                    )}
                </Media>
                <InView
                    onChange={(inView) => inView && setThree('#enviromental-design')}
                    style={{
                        position: 'relative',
                        bottom: '-50vh'
                    }}
                />
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
                <span id='education'
                    style={{
                        position: 'relative',
                        bottom: '12rem',
                    }}
                />

                <Media query={'screen and (max-width: 31.25em)'}>
                    {match => match ? (
                        <ThreeButton index={1} />
                    ) : (
                        <Title writeToHead={false}>
                            Образование
                        </Title>
                    )}
                </Media>
                <InView
                    onChange={(inView) => inView && setThree('#education')}
                    style={{
                        position: 'relative',
                        bottom: '-50vh'
                    }}
                />
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
                <span id='soft'
                    style={{
                        position: 'relative',
                        bottom: '12rem',
                    }}
                />
                <Media query={'screen and (max-width: 31.25em)'}>
                    {match => match ? (
                        <ThreeButton index={2} />
                    ) : (
                        <Title writeToHead={false}>
                            Софт
                        </Title>
                    )}
                </Media>
                <InView
                    onChange={(inView) => inView && setThree('#soft')}
                    style={{
                        position: 'relative',
                        bottom: '-50vh'
                    }}
                />
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

            <div style={{ height: vertOffset, paddingTop: '4rem', }} >
                <RunningLine>
                    <h1
                        style={{
                            textTransform: 'uppercase',
                            fontSize: 46,
                            margin: '0',
                            color: 'black', // 'var(--color-text-opposite)',
                        }}
                    >
                        команда студии / plug-in структура / команда студии / plug-in структура / команда студии / plug-in структура / команда студии / plug-in структура /
                    </h1>
                </RunningLine>
            </div>

            <div style={{ height: '12rem' }} />

            <article style={{ paddingLeft: '1rem' }}>
                <Flex>
                    <ul>
                        {[
                            ['Данияр Юсупов', 'главный архитектор студии'],
                            ['Владимир Петросян', 'генеральный директор'],
                            ['Надежда Кузнецова', 'куратор проектов'],
                            ['Елизавета Владимирова', 'куратор проектов'],
                        ].map(([name, rang]) => <div><span style={{ fontWeight: 'bold' }}>{name}</span> : : {rang}</div>)}
                    </ul>
                    <ul>
                        {[
                            ['Сергей Барышев', 'дизайнер'],
                            ['Роман Тимашев', 'разработчик'],
                            ['Григорий Балуев', 'разработчик'],
                            ['Арсений Юсупов', 'разработчик'],
                            ['Алена Чеусова', 'архитектор'],
                            ['Анастасия Матюшонок', 'архитектор'],
                            ['Виктория Бинковская', 'архитектор'],
                        ].map(([name, rang]) => <div><span style={{ fontWeight: 'bold' }}>{name}</span> : : {rang}</div>)}
                    </ul>
                </Flex>
            </article>

            <p style={{padding: 'var(--content-padding)'}}>
                С нами работали: Анастасия Славина, Анита Попова, Артем Никитин, Валера Газаров, Вероника Серебрякова, Виктор Сергеев, Джульетта Боброва, Евгений Щукин, Елизавета Челнокова, Кирилл Петров, Марина Цай, Михаил Палькин, Никита Сидоров, Николай Медведенко, Оля Чернякова, Петр Шуба, Соня Шишкина
            </p>

            <div style={{
                marginTop: vertOffset,
            }} />

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
