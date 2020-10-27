import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { createElement } from 'react'

const pages = new Map([
    ['/about', [
        // @ts-ignore
        dynamic(() => import('@/content/ru/about.mdx')),
        // @ts-ignore
        dynamic(() => import('@/content/en/about.mdx'))
    ]],
])

const Page: NextPage = props => {
    const { pathname, locale } = useRouter()
    if (!pages.has(pathname)) {
        return (
            <div>404</div>
        )
    }

    const [ru, en] = pages.get(pathname)
    if (locale === 'en') {
        return createElement(en)
    }

    return createElement(ru)
}

export default Page
