import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { MobileFallback } from '../src/components/MobileFallback'
import { UnitHighlight } from '../src/components/UnitHighlight'
import { WideBlock } from '../src/components/WideBlock'

const Page: NextPage = () => (
    <>
        <MobileFallback
            mobile={(
                <img
                    width={'100%'}
                    src={'https://raw.githubusercontent.com/tmshv/popcode/master/sketches/unit4_z3/preview.png'}
                    style={{
                        marginBottom: 50,
                    }}
                />
            )}
        >
            <WideBlock
                style={{
                    marginBottom: 30,
                }}
            >
                <iframe
                    height={300}
                    style={{
                        backgroundColor: 'none',
                        width: '100%',
                    }}
                    scrolling={'no'}
                    title={'xeIKs'}
                    src={'//tmshv.github.io/popcode/unit4_z3/'}
                    frameBorder={'no'}
                />
            </WideBlock>
        </MobileFallback>

        <UnitHighlight
            style={{
                padding: 'var(--content-padding)',
            }}
            size={'small'}
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
