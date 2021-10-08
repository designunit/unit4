import { NextPage } from 'next'
import { Title } from '../src/components/Title'
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'
import { Table } from '@/components/Index/Table'
import { ThreeButtons } from '@/components/Index/ThreeButtons'
import { DoubleBlock } from '@/components/Index/DoubleBlock'
import { Hero } from '@/components/Index/Hero'
import { Loud } from '@/components/Loud'
import { InView } from 'react-intersection-observer'

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

                <div style={{
                    marginTop: vertOffset,
                }} />
                <span id='enviromental-design'
                    style={{
                        position: 'relative',
                        bottom: '12rem',
                    }}
                />

                <Title multiline>
                    Средовое <br />
                    проектирование
                </Title>
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

                <Title multiline >
                    Образование

                </Title>
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
                <Title multiline >
                    Софт
                </Title>
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
                                    В каждым проекте мы стремимся создавать особые фичи для оптимизации процесса проектирования. Такая специфика предприятия позволяет сфокусироваться на деталях дизайн-решений.
                                </div>
                            </>
                        )}
                    />
                </div>
            </div>

            <div
                style={{
                    marginTop: vertOffset,
                }}
            />
            <Loud>
                Команда студии сформировалась <br />
                как экосистема с plug-in структурой,<br />
                где инициируются и поддерживаются <br />
                амбиции каждого
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

            <div
                style={{
                    marginTop: vertOffset,
                }}
            />
            <Loud>
                «Знаем силу дизайна <br />
                и щедро делимся ею»
            </Loud>
            <div
                style={{
                    fontSize: '12px',
                    textTransform: 'none',
                    marginTop: '-3rem',
                    marginBottom: vertOffset,
                    padding: 'var(--content-padding)',
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
