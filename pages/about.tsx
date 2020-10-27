import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { createElement } from 'react'

// @ts-ignore
const Ru = dynamic(() => import('@/content/ru/about.mdx'))
// @ts-ignore
const En = dynamic(() => import('@/content/en/about.mdx'))

const Page: NextPage = props => {
    const { locale } = useRouter()

    if (locale === 'en') {
        return createElement(En)
    }

    return createElement(Ru)
}

export default Page
