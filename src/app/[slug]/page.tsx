import { Title } from '@/components/Title'
import { getPageBySlug, getPages } from '@/api'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { UnitHighlight } from '@/components/UnitHighlight'
import { ImageSet } from '@/components/ImageSet'
import { WideBlock } from '@/components/WideBlock'
import { NextSeo } from 'next-seo'
import { Flex } from '@/components/Flex'
import { BlackHighlight } from '@/components/BlackHighlight'
import { BeforeAfter } from '@/components/BeforeAfter'
import type { PageDefinition } from '@/types'
import type { ImageProps } from 'next/image'
import type { ImageSetProps } from '@/components/ImageSet'

const OymyakonSankey = dynamic(import('@/special/oymyakon/OymyakonSankey'))
const Carousel = dynamic(() => import('@/components/Carousel'))
const HeterotopiaTitle = dynamic(() => import('@/special/heterotopia/Title'))
const HeterotopiaHighlight = dynamic(() => import('@/special/heterotopia/Highlight'))

const mdxComponents = {
    Image: (props: ImageProps) => (
        <div>
            <Image {...props}
                style={{
                    marginBottom: '2em',
                    objectFit: 'cover',
                    width: '100%',
                    height: 'auto',
                }}
                alt={props.alt ?? 'project'} // TODO: do something with optional alt
                width={props.width ?? 1920}
                height={props.height ?? 1200}
            />
        </div>
    ),
    ImageSet: (props: ImageSetProps) => (
        <ImageSet {...props}
            style={{ marginBottom: '2em' }}
            width={props.width ?? 1920}
            height={props.height ?? 1200}
        />
    ),
    Carousel,
    UnitHighlight,
    Title,
    OymyakonSankey,
    WideBlock,
    HeterotopiaHighlight,
    HeterotopiaTitle,
    Flex,
    BlackHighlight,
    BeforeAfter,
}

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
        <>
            {/* <NextSeo
                title={props.title ?? undefined}
                description={props.excerpt}
                openGraph={{
                    title: props.title ?? undefined,
                    description: props.excerpt,
                    url: `https://unit4.io${props.slug}`,
                    images: !props.cover ? [] : [
                        {
                            url: props.cover,
                            type: 'image/jpeg',
                        },
                    ],
                }}
                // telegram will show big image with this option
                twitter={{
                    cardType: 'summary_large_image',
                }}
            /> */}

            {/* TODO */}
            {/* {props.contentLocale === router.locale ? null : (
                <div>Warning! Locale is different</div>
            )} */}

            <article>
                <MDXRemote
                    source={page.content!}
                    components={mdxComponents}
                />
            </article>
        </>
    )
}

export async function generateStaticParams() {
    return getPages()
        .map(({ slug }) => ({ slug }))
}
