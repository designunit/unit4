import { Title } from '@/components/Title'
import { getPageBySlug, getPages } from '@/api'
// import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { UnitHighlight } from '@/components/UnitHighlight'
import { ImageSet } from '@/components/ImageSet'
import { WideBlock } from '@/components/WideBlock'
import { NextSeo } from 'next-seo'
import { Flex } from '@/components/Flex'
import { BlackHighlight } from '@/components/BlackHighlight'
import { BeforeAfter } from '@/components/BeforeAfter'

import dynamic from 'next/dynamic'

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import type { PageDefinition } from '@/types'
import type { ImageProps } from 'next/image'
import type { ImageSetProps } from '@/components/ImageSet'
import { notFound } from 'next/navigation'

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

function loadPage(slug: string) {
    // if (ctx.params) {
    //     slug = (ctx.params!.slug! as string[]).join('/')
    // }
    // slug = '/' + slug

    // let contentLocale = ctx.locale
    let contentLocale = 'ru'
    let page = getPageBySlug(contentLocale, slug)
    if (!page) {
        return null
    //     page = await getPageBySlug('ru', slug)
    //     contentLocale = 'ru'
    }

    // const { content, ...def } = page
    // const source = await serialize(content)
    // const source = await serialize(`# HI MDX`)
    // if (!source) {
        // return null
    // }

    return {
        ...page,
        // source,
        contentLocale: contentLocale!,
    }
}

type Props = PageDefinition & {
    contentLocale: string
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const page = loadPage(slug)
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
    return [
        { slug: 'photostream' },
        { slug: 'oymyakon' },
        { slug: 'shelter' },
    ]
  // const posts = getAllPosts();

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export const getStaticPaths: GetStaticPaths = async () => {
    const pages = getPages()
    return {
        paths: pages
            .map(({ slug }) => {
                // trim beginning slash
                // /path/to/page -> path/to/page
                return slug.split('/').slice(1)
            })
            .map(slug => { slug })
            // .flatMap(slug => {
            //     return [
            //         {
            //             params: { slug },
            //             locale: 'ru',
            //         },
            //         {
            //             params: { slug },
            //             locale: 'en',
            //         },
            //     ]
            // }),
        // fallback: false,
    }
}
