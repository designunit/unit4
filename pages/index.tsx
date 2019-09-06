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
            }}
        />

        <UnitHighlight items={[
            {
                date: new Date('2019-08-30'),
                href: '/repository/oymyakon',
                title: 'Оймякон : : п(о)люс со-временности',
            },
            {
                date: new Date('2019-08-25'),
                href: '/repository/gor_projects_spb',
                title: 'Концепции spb.city4people.ru',
            },
            {
                date: new Date('2019-08-12'),
                href: '/repository/hovrinka',
                title: 'Социально-культурный центр Ховринка',
            },
            {
                date: new Date('2019-07-28'),
                href: '/repository/delta',
                title: 'Благоустройство ЖК ComCity',
            },
        ]} />
    </>
)

export default Page
