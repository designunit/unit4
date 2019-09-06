import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { UnitHighlight } from '../src/components/UnitHighlight'

const UnitCanvasDynamic = dynamic(() => import('../src/components/UnitCanvas'), {
    ssr: false,
})

const Page: NextPage = () => (
    <>
        <UnitCanvasDynamic
            style={{
                marginBottom: 50,
                marginTop: 50,
                padding: 'var(--content-padding)',
            }}
        />

        <UnitHighlight
            style={{
                padding: 'var(--content-padding)',
            }}
            items={[
                {
                    date: new Date('2019-08-30'),
                    href: '/repository/oymyakon',
                    text: 'Оймякон : : п(о)люс со-временности',
                },
                {
                    date: new Date('2019-08-25'),
                    href: '/repository/gor_projects_spb',
                    text: 'Концепции spb.city4people.ru',
                },
                {
                    date: new Date('2019-08-12'),
                    href: '/repository/hovrinka',
                    text: 'Социально-культурный центр Ховринка',
                },
                {
                    date: new Date('2019-07-28'),
                    href: '/repository/delta',
                    text: 'Благоустройство ЖК ComCity',
                },
            ]} />
    </>
)

export default Page
