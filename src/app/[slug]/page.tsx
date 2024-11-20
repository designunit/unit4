import { getPageBySlug, getPages } from '@/api'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import mdxComponents from './mdx'
import type { Metadata } from 'next'
import { DEFAULT_COVER, URL_BASE } from '@/constants'

type MetadataProps = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
    const { slug } = await params
    const page = getPageBySlug('ru', slug)

    return {
        title: page!.title,
        description: page!.excerpt,
        openGraph: {
            url: `${URL_BASE}/${slug}`,
            images: [page?.cover ?? DEFAULT_COVER],
        },
    }
}

export async function generateStaticParams() {
    return getPages()
        .filter(({ locale }) => locale === 'ru')
        .map(({ slug }) => ({ slug }))
}

type Props = {
    params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
    const { slug } = await params
    const page = getPageBySlug('ru', slug)
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
