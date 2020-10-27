import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
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
    ['/volokolamsk', [
        // @ts-ignore
        dynamic(() => import('@/content/ru/volokolamsk.mdx')),
        // @ts-ignore
        dynamic(() => import('@/content/en/volokolamsk.mdx'))
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

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {

        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        fallback: false,
        paths: [
            { params: { slug: ['about'], locale: 'ru' } },
            { params: { slug: ['about'], locale: 'en' } },
            { params: { slug: ['volokolamsk'], locale: 'ru' } },
            { params: { slug: ['volokolamsk'], locale: 'en' } },
        ],
    }
}

export default Page
