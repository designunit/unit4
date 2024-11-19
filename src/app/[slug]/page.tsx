import { getPageBySlug, getPages } from '@/api'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import mdxComponents from './mdx'
import type { PageDefinition } from '@/types'

function loadPage(locale: string, slug: string) {
    let page = getPageBySlug(locale, slug)
    if (!page) {
        return null
    }

    return {
        ...page,
        locale: locale,
    }
}


export async function generateStaticParams() {
    return getPages()
        .map(({ slug }) => ({ slug }))
}

type Props = PageDefinition & {
    contentLocale: string
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const page = loadPage('ru', slug)
    if (!page) {
        return notFound()
    }

    return (
        <article>
            <MDXRemote
                source={page.content!}
                components={mdxComponents}
            />
        </article>
    )
}
