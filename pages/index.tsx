import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { Embed } from '../src/components/Embed'
import { Gallery } from '../src/components/Gallery'
import { Title } from '../src/components/Title'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { TextBlock } from '@/components/TextBlock'
import Link from 'next/link'

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

const IndexDoubleBlock = ({ left, right, ...props }) => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexFlow: 'column',
        }}>
            <div style={{
                alignSelf: 'flex-start',
                display: 'flex',
                flexFlow: 'column',
            }}>
                {left.map(x => (
                    <div>
                        {x}
                    </div>
                ))}
            </div>
            <div style={{

            }}>
                <div style={{
                    marginLeft: 'auto',
                    display: 'flex',
                    alignSelf: 'flex-end',
                }}>
                    <div style={{
                        flex: '1 0 33%',
                    }} />

                    <div style={{
                        marginLeft: 'auto',
                        display: 'flex',
                        flexFlow: 'column',
                    }}>
                        {right}
                    </div>
                </div>
            </div>
        </div>
    )
}


const table = [
    {
        name: 'Открытый международном архитектурном конкурсе Москомархитектуры и ГК «А101» на разработку концепции общественных пространств площадью 100 га на территории ЖК «Скандинавия» в Новой Москве',
        href: '/latlng',
        status: 'первое место',
        year: '2017',
        location: 'Москва',
    },
    {
        name: 'Открытый международном архитектурном конкурсе Москомархитектуры и ГК «А101» на разработку концепции общественных пространств площадью 100 га на территории ЖК «Скандинавия» в Новой Москве',
        href: '/latlng',
        status: 'первое место',
        year: '2017',
        location: 'Москва',
    },
    {
        name: 'Открытый международном архитектурном конкурсе Москомархитектуры и ГК «А101» на разработку концепции общественных пространств площадью 100 га на территории ЖК «Скандинавия» в Новой Москве',
        href: '/latlng',
        status: 'первое место',
        year: '2017',
        location: 'Москва',
    },
    {
        name: 'Открытый международном архитектурном конкурсе Москомархитектуры и ГК «А101» на разработку концепции общественных пространств площадью 100 га на территории ЖК «Скандинавия» в Новой Москве',
        href: '/latlng',
        status: 'первое место',
        year: '2017',
        location: 'Москва',
    },
]

const Table = () => (
    <div style={{
        display: 'flex',
        flexFlow: 'column',
    }}>
        {table.map(x => (
            <div style={{
                display: 'flex',
                flexFlow: 'nowrap',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Link
                    href={x.href}
                >
                    <a style={{
                        padding: '8px 0',
                        flex: '1 0 50%',
                    }}>
                        {x.name}
                    </a>
                </Link>
                <div style={{
                    width: 0,
                    margin: '0 16px',
                    borderRight: 'solid 1px var(--color-background-opposite)',
                    alignSelf: 'stretch',
                }} />
                <div>
                    {x.status}
                </div>
                <div style={{
                    width: 0,
                    margin: '0 16px',
                    borderRight: 'solid 1px var(--color-background-opposite)',
                    alignSelf: 'stretch',
                }} />
                <div>
                    {x.year}
                </div>
                <div style={{
                    width: 0,
                    margin: '0 16px',
                    borderRight: 'solid 1px var(--color-background-opposite)',
                    alignSelf: 'stretch',
                }} />
                <div>
                    {x.location}
                </div>
            </div>
        ))}

    </div>

)

const Page: NextPage = () => {
    const { t } = useTranslation()

    const vertOffset = '8rem'

    return (
        <>
            <div style={{
                position: 'relative',
                height: '50vh',
                overflow: 'hidden',
                marginBottom: vertOffset,
            }}>
                <div
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        zIndex: -1,
                        background: 'conic-gradient(from 188.75deg at 60.16% 50.19%, rgba(255, 0, 102, 0) -15.49deg, #38DEC2 28.34deg, #0047CB 91.88deg, #D0103A 181.87deg, #FF1B0D 306.52deg, rgba(255, 0, 102, 0) 344.51deg, #38DEC2 388.34deg)',
                        width: 600,
                        height: 300,
                    }}
                />
                <h1
                    style={{
                        textAlign: 'right',
                        fontSize: 22,
                        fontWeight: 400,
                    }}
                >
                    Мы проектная студия design unit 4
                </h1>
                <Title
                    mode='multiline'
                    caption='Данияр Юсупов, основатель студии'
                >
                    <div>
                        «Знаем силу дизайна
                    </div>
                    <div style={{ paddingLeft: '20%' }}>
                        и щедро делимся ею»
                    </div>
                </Title>
            </div>

            <div style={{
                position: 'relative',
            }}>
                <div style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 2,
                    display: 'flex',
                    flexWrap: 'nowrap',
                    gap: 10,
                    paddingTop: 10,
                    marginBottom: '6rem',
                }}>
                    {[
                        {
                            text: 'СРЕДОВОЕ ПРОЕКТИРОВАНИЕ',
                            src: '/static/wip.png'
                        },
                        {
                            text: 'ОБРАЗОВАНИЕ',
                            src: '/static/wip.png'
                        },
                        {
                            text: 'СОФТ',
                            src: '/static/wip.png'
                        },
                    ].map(x => (
                        <div style={{
                            position: 'relative',
                            flex: '1 0 30%',
                            height: 170,
                        }}>
                            <img
                                src={x.src}
                                style={{
                                    display: 'block',
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    filter: '',
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                width: '100%',
                                height: '100%',
                                background: '#FF006666',
                            }} />
                            <span style={{
                                position: 'absolute',
                                zIndex: 2,
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                textAlign: 'center',
                            }}>

                                {x.text}
                            </span>
                        </div>
                    ))}
                </div>

                <Title
                    mode='multiline'
                >
                    <div>
                        Средовое
                    </div>
                    <div
                        style={{
                            marginBottom: vertOffset,
                            paddingLeft: '20%',
                        }}
                    >
                        проектирование
                    </div>
                </Title>

                <IndexDoubleBlock
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
                <IndexDoubleBlock
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
                <IndexDoubleBlock
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
                <IndexDoubleBlock
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
