import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import * as React from 'react'

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
    </>
)

export default Page
