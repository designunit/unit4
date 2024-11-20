import { getPageBySlug, getPages } from '@/api'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import mdxComponents from './mdx'
import type { PageDefinition } from '@/types'
import type { Metadata, ResolvingMetadata } from 'next'
import { DEFAULT_COVER } from '@/constants'

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

type MetadataProps = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
    const { slug } = await params
    const page = loadPage('ru', slug)

    return {
        title: page!.title,
        description: page!.excerpt,
        openGraph: {
            url: `https://unit4.io/${slug}`,
            images: [page?.cover ?? DEFAULT_COVER],
        },
    }
}

export async function generateStaticParams() {
    return getPages()
        .filter(({ locale }) => locale === 'ru')
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
