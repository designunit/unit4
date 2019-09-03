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
                    flex-direction: column;

                    padding: 0 5px;
                    margin: 5em auto;
                }

                div {
                    width: 75%;
                }

                @media screen and (max-width: 31.25em) {
                    div {
                        width: 100%;
                    }
                }

                a:link, a:visited {
                    background-color:  #ff0066;
                    color: white;
                    text-decoration: none;
                    padding: 0 8px;
                }

                a:hover, a:active {
                    background-color: black;
                  }
            `}</style>

            <div>
            30 | 08 | 2019 <a href={'/repository/oy'}>Оймякон : : п(о)люс со-временности</a><br/>
            12 | 08 | 2019 <a href={'/repository/hovrinka'}>социально-культурный центр Ховринка</a><br/>
            28 | 07 | 2019 <a href={'/repository/'}>благоустройство ЖК ComCity</a><br/>
            </div>
        </section>
    </>
)

export default Page
