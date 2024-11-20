import { getPageBySlug, getPages } from '@/api'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import mdxComponents from './mdx'
import type { PageDefinition } from '@/types'
import type { Metadata, ResolvingMetadata } from 'next'

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

export async function generateMetadata({ params }: MetadataProps, parent: ResolvingMetadata): Promise<Metadata> {
    const { slug } = await params
    const page = loadPage('ru', slug)

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: page!.title,
        description: page!.excerpt,
        openGraph: {
            url: `https://unit4.io/${slug}`,
            images: [page!.cover!, ...previousImages],
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
