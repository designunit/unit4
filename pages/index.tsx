import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { Gallery } from '../src/components/Gallery'

const UnitCanvasDynamic = dynamic(() => import('../src/components/UnitCanvas'), {
    ssr: false,
})

const Page: NextPage = () => (
    <>
        <UnitCanvasDynamic
            marginTop={50}
        />

        <section>
            <style jsx>{`
                section {
                    display: flex;
                    justify-content: center;

                    margin: 4em 0 2em;
                }

                div {
                    width: 75%;
                }

                @media screen and (max-width: 31.25em) {
                    div {
                        width: 100%;
                    }
                }
            `}</style>

            <div>
                <Gallery
                    minCellSize={150}
                    gridGap={20}
                    smallLabel={true}
                    items={[
                        {
                            href: '/repository/hovrinka',
                            src: 'https://unit4.io/files/hovrinka/hovrinka.jpg',
                            text: (
                                <>
                                    СОЦИАЛЬНО-КУЛЬТУРНЫЙ
                                    <br />
                                    ЦЕНТР
                                    <br />
                                    ХОВРИНКА
                                </>
                            ),
                        },
                        {
                            href: '/repository/delta',
                            src: 'https://unit4.io/files/delta/delta.jpg',
                            text: 'БЛАГОУСТРОЙСТВО ЖК COMCITY МОСКВА',
                        },
                        {
                            href: '/repository/gor_projects_spb',
                            src: 'https://spb.city4people.ru/static/img_c4p/project3/todo-after_.jpg',
                            text: 'КОНЦЕПЦИИ spb.city4people.ru',
                        },
                        {
                            href: '/repository/yoshkola',
                            src: 'https://unit4.io/files/yoshkola/04.jpg',
                            text: (
                                <>
                                    IT ШКОЛА
                                    <br />
                                    ЙОШКАР-ОЛА
                                </>
                            ),
                        },
                    ]}
                />
            </div>
        </section>
    </>
)

export default Page
