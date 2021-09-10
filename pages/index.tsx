import { NextPage } from 'next'
import { Title } from '../src/components/Title'
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'
import { Table } from '@/components/Index/Table'
import { ThreeButtons } from '@/components/Index/ThreeButtons'
import { DoubleBlock } from '@/components/Index/DoubleBlock'
import { Hero } from '@/components/Index/Hero'
import { Waypoint } from 'react-waypoint'
import Media from 'react-media'
import { Loud } from '@/components/Loud'

const Page: NextPage = () => {
    const { t } = useTranslation()

    const vertOffset = '6rem'

    const [three, setThree] = useState(null)

    return (
        <>
            <Hero />

            <div style={{
                position: 'relative',
            }}>
                <ThreeButtons
                    state={three}
                />

                <span id='enviromental-design'
                    style={{
                        position: 'relative',
                        bottom: '12rem',
                    }}
                />

                <Media queries={{
                    mobile: "(max-width: 31.25em)",
                }}>
                    {matches => (
                        <Title
                            mode='multiline'
                        >
                            <div
                                style={{ marginTop: vertOffset }}
                            >
                                Средовое
                            </div>
                            <div
                                style={{
                                    paddingLeft: matches.mobile ? 'none' : '20%',
                                }}
                            >
                                проектирование
                            </div>
                        </Title>
                    )}
                </Media>
                <Waypoint
                    onEnter={() => setThree('#enviromental-design')}
                >
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
                </Waypoint>

                <span id='education'
                    style={{
                        position: 'relative',
                        bottom: '12rem',
                    }}
                />

                <Media queries={{
                    mobile: "(max-width: 31.25em)",
                }}>
                    {matches => (
                        <Title
                            crossed
                        >
                            <div
                                style={{
                                    margin: '4rem 0',
                                    marginLeft: matches.mobile ? 'none' : '33%',
                                }}
                            >
                                Образование
                            </div>
                        </Title>
                    )}
                </Media>
                <Waypoint
                    onEnter={() => setThree('#education')}
                >
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
                </Waypoint>

                <span id='soft'
                    style={{
                        position: 'relative',
                        bottom: '12rem',
                    }}
                />
                <Media queries={{
                    mobile: "(max-width: 31.25em)",
                }}>
                    {matches => (
                        <Title
                            crossed
                        >
                            <div
                                style={{
                                    margin: '4rem 0',
                                    marginLeft: matches.mobile ? 'none' : '66%',
                                }}
                            >
                                Софт
                            </div>
                        </Title>

                    )}
                </Media>
                <Waypoint
                    onEnter={() => setThree('#soft')}
                >
                    <div>
                        <DoubleBlock
                            left={[
                                'инструменты городских исследований ',
                                'софт оптимизации процесса проектирования',
                            ]}
                            right={(
                                <>
                                    <div>
                                        В каждым проекте мы стремимся создавать особые фичи для оптимизации процесса проектирования. Такая специфика предприятия позволяет сфокусироваться на деталях дизайн-решений.
                                    </div>
                                </>
                            )}
                        />
                    </div>
                </Waypoint>
            </div>

            <Loud
                mode='multiline'
            >
                <div
                    style={{
                        marginTop: vertOffset,
                    }}
                >
                    Команда студии
                </div>
                <div style={{ paddingLeft: '30%' }}>
                    сформировалась
                </div>
                <div>
                    как экосистема с plug-in
                </div>
                <div style={{ paddingLeft: '50%' }}>
                    структурой,
                </div>
                <div>
                    где инициируются
                </div>
                <div style={{ paddingLeft: '10%' }}>
                    и поддерживаются амбиции
                </div>
                <div style={{ paddingLeft: '50%' }}>
                    каждого
                </div>
            </Loud>
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

            <Table />

            <Loud
                mode='multiline'
            >
                <div
                    style={{
                        marginTop: vertOffset,
                    }}
                >
                    «Знаем силу дизайна
                </div>
                <div style={{ paddingLeft: '20%' }}>
                    и щедро делимся ею»
                </div>
            </Loud>
            <div
                style={{
                    position: 'relative',
                    top: '-2rem',
                    marginLeft: '50%',
                    fontSize: '12px',
                }}
            >
                Данияр Юсупов, основатель студии
            </div>
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
