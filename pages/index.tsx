import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { MobileFallback } from '../src/components/MobileFallback'
import { UnitHighlight } from '../src/components/UnitHighlight'
import { WideBlock } from '../src/components/WideBlock'
import { useTranslation } from '../src/i18n'

const Page: NextPage = () => {
    const { t } = useTranslation()

    return (
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
                        date: new Date('2019-11-07'),
                        href: '/repository/edu_ugra',
                        text: t('highlight-edu_ugra'),
                    },
                    {
                        date: new Date('2019-10-01'),
                        href: '/repository/uray_ppi',
                        text: t('highlight-uray_ppi'),
                    },
                    {
                        date: new Date('2019-08-30'),
                        href: '/repository/oymyakon',
                        text: t('highlight-oymyakon'),
                    },
                    {
                        date: new Date('2019-07-28'),
                        href: '/repository/delta',
                        text: t('highlight-delta'),
                    },
                ]}
            />
        </>
    )
}

export default Page
