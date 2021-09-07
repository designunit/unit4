import { NextPage } from 'next'
import { Title } from '../src/components/Title'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { Table } from '@/components/Index/Table'
import { ThreeButtons } from '@/components/Index/ThreeButtons'
import { DoubleBlock } from '@/components/Index/DoubleBlock'
import { Hero } from '@/components/Index/Hero'

const items = [
    {
        href: '/volokolamsk',
        src: 'https://s.tmshv.com/unit4/volokolamsk-04.jpg',
        text: 'volokolamsk',
    },
    {
        href: '/latlng',
        src: 'https://s.tmshv.com/unit4/latlng-latlng.gif',
        text: 'latlng',
    },
    {
        href: '/ugra-edu',
        src: 'https://s.tmshv.com/unit4/edu_ugra-01.jpg',
        text: 'edu_ugra',
    },
    {
        href: '/uray-ppi',
        src: 'https://s.tmshv.com/unit4/uray_ppi-urai.jpg',
        text: 'uray_ppi',
    },
    {
        href: '/heterotopia',
        src: 'https://s.tmshv.com/unit4/heterotopia-heterotopia.gif',
        text: 'heterotopia',
    },
    {
        href: '/oymyakon',
        src: 'https://s.tmshv.com/unit4/oymyakon-viz_gulag.jpg',
        text: 'oymyakon',
    },
    {
        href: '/hovrinka',
        src: 'https://s.tmshv.com/unit4/hovrinka-hovrinka.jpg',
        text: 'hovrinka',
    },
    {
        href: '/delta',
        src: 'https://s.tmshv.com/unit4/delta-delta.jpg',
        text: 'delta',
    },
    {
        href: '/application-manual',
        src: 'https://s.tmshv.com/unit4/app_manual-manual.jpg',
        text: 'application_manual',
    },
    {
        href: '/gorprojects-spb',
        src: 'https://s.tmshv.com/unit4/gorprojects_spb-project3-todo-after_.jpg',
        text: 'gor_projects_spb',
    },
    {
        href: '/yoshkola',
        src: 'https://s.tmshv.com/unit4/yoshkola-04.jpg',
        text: 'yoshkola',
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
    {
        href: '/scnd-dc',
        src: 'https://s.tmshv.com/unit4/dc_scnd-dc.gif',
        text: 'dc_scnd',
    },
    {
        href: '/scnd-gb',
        src: 'https://s.tmshv.com/unit4/gb_scnd-gb.jpg',
        text: 'gb_scnd',
    },
    {
        href: '/samarapark',
        src: 'https://s.tmshv.com/unit4/samarapark-10.jpg',
        text: 'samarapark',
    },
    {
        href: '/garagescreen',
        src: 'https://s.tmshv.com/unit4/garagescreen-02.gif',
        text: 'garagescreen',
    },
    {
        href: '/scnd-d',
        src: 'https://s.tmshv.com/unit4/d_scnd-03.jpg',
        text: 'd_scnd',
    },
    {
        href: '/krvostok',
        src: 'https://s.tmshv.com/unit4/krvostok-01.jpg',
        text: 'krvostok',
    },
    {
        href: '/trollgardens',
        src: 'https://s.tmshv.com/unit4/trollgardens-05.jpg',
        text: 'trollgardens',
    },
    {
        href: '/chistopol2',
        src: 'https://s.tmshv.com/unit4/chistopol2-07.jpg',
        text: 'chistopol2',
    },
    {
        href: '/kemb',
        src: 'https://s.tmshv.com/unit4/kemb-01.jpg',
        text: 'kemb',
    },
    {
        href: '/model4',
        src: 'https://s.tmshv.com/unit4/model4-01.jpg',
        text: 'model4',
    },
    {
        href: '/chistopol',
        src: 'https://s.tmshv.com/unit4/chistopol-02.jpg',
        text: 'chistopol',
    },
]

const Page: NextPage = () => {
    const { t } = useTranslation()

    const vertOffset = '8rem'

    return (
        <>
            <Hero
                vertOffset={vertOffset}
            />

            <div style={{
                position: 'relative',
            }}>
                <ThreeButtons />

                <span id='enviromental-design'
                    style={{
                        position: 'relative',
                        bottom: '12rem',
                    }}
                />
                <Title
                    mode='multiline'
                >
                    <div>
                        Средовое
                    </div>
                    <div
                        style={{
                            paddingLeft: '20%',
                        }}
                    >
                        проектирование
                    </div>
                </Title>

                <DoubleBlock
                    left={[
                        '/ проекты городской среды',
                        '/ мастерпланы развития территорий',
                        '/ экспертиза средовых проектов',
                        '/ разработка дизайн-кода',
                        '/ проекты образовательных сред',
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

                <span id='education'
                    style={{
                        position: 'relative',
                        bottom: '12rem',
                    }}
                />
                <Title
                    crossed
                >
                    <div
                        style={{
                            margin: '4rem 0',
                            marginLeft: '33%'
                        }}
                    >
                        Образование
                    </div>
                </Title>
                <DoubleBlock
                    left={[
                        '/ образовательные программы',
                        '/ профессиональные воркшопы',
                        '/ тематические экскурсии',
                        '/ организация цеховых конференций',
                    ]}
                    right={(
                        <>
                            <div>
                                Образование во всех смыслах становится базовым компонентом жизни студии: как внутри, так и снаружи. Создание обучающих программ, конференций и воркшопов, экспертное участие в международных грантовых проектах и конкурсах интегрируются в рабочий процесс, становясь его неотъемлемой частью.
                            </div>
                        </>
                    )}
                />

                <span id='soft'
                    style={{
                        position: 'relative',
                        bottom: '12rem',
                    }}
                />
                <Title
                    crossed
                >
                    <div
                        style={{
                            margin: '4rem 0',
                            marginLeft: '66%',
                        }}
                    >
                        Софт
                    </div>
                </Title>
                <DoubleBlock
                    left={[
                        '/ инструменты городских исследований ',
                        '/ софт оптимизации процесса проектирования',
                    ]}
                    right={(
                        <>
                            <div>
                                В каждым проекте мы стремимся создавать особые фичи для оптимизации процесса проектирования. Такая специфика предприятия позволяет сфокусироваться на деталях дизайн-решений.
                            </div>
                        </>
                    )}
                />

                <Title
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
                        каждого.
                    </div>
                </Title>
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
            </div>

            <Table />

            <Title
                mode='multiline'
            >
                <div
                    style={{
                        marginTop: vertOffset,
                    }}
                >
                    Проектируем среды,
                </div>
                <div style={{ paddingLeft: '30%' }}>
                    которые влияют
                </div>
                <div style={{ paddingLeft: '10%' }}>
                    на жизнь людей
                </div>
            </Title>
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
