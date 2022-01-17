import { Title } from '@/components/Title'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { PageDefinition } from '@/types'
import { getPageBySlug, getPages } from '@/api'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { Image } from '@/components/Image'
import { UnitHighlight } from '@/components/UnitHighlight'
import { Carousel } from 'antd'
import DatavizStage from '@/app/oymyakon/DatavizStage'
import { ImageSet } from '@/components/ImageSet'
import { WideBlock } from '@/components/WideBlock'
import { HeterotopiaTitle } from '@/app/heterotopia/HeterotopiaTitle'
import { HeterotopiaHighlight } from '@/app/heterotopia/HeterotopiaHighlight'
import { NextSeo } from 'next-seo'
import { Flex } from '@/components/Flex'
import { BlackHighlight } from '@/components/BlackHighlight'
import { BeforeAfter } from '@/components/BeforeAfter'

const mdxComponents = {
    Image,
    Carousel,
    UnitHighlight,
    Title,
    DatavizStage,
    ImageSet,
    WideBlock,
    HeterotopiaHighlight,
    HeterotopiaTitle,
    Flex,
    BlackHighlight,
    BeforeAfter,
}

type Props = PageDefinition & {
    contentLocale: string
}

const Page: NextPage<Props> = props => {
    const router = useRouter()
    if (router.isFallback) {
        return (
            <div>loading</div>
        )
    }

    return (
        <>
            <NextSeo
                title={props.title}
                description={props.excerpt}
                openGraph={{
                    title: props.title,
                    description: props.excerpt,
                    url: `https://unit4.io${props.slug}`,
                    images: [
                        {
                            url: props.cover,
                        }
                    ]
                }}
            />

            {/* TODO */}
            {/* {props.contentLocale === router.locale ? null : (
                <div>Warning! Locale is different</div>
            )} */}

            <article>
                <MDXRemote {...props.source} components={mdxComponents} />
            </article>
        </>
    )
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
    let slug = ''
    if (ctx.params) {
        slug = (ctx.params!.slug! as string[]).join('/')
    }
    slug = '/' + slug

    let contentLocale = ctx.locale
    let page = await getPageBySlug(ctx.locale, slug)
    if (!page) {
        page = await getPageBySlug('ru', slug)
        contentLocale = 'ru'
    }
    if (!page) {
        return {
            notFound: true,
        }
    }

    const { content, ...def } = page
    const source = await serialize(content)
    if (!source) {
        return {
            notFound: true,
        }
    }

    return {
        // revalidate: 30,
        props: {
            ...def,
            source,
            contentLocale,
        }
    }
}

export const getStaticPaths: GetStaticPaths = async ctx => {
    const pages = await getPages()

    return {
        paths: pages
            .reduce((acc, { slug, locale }) => {
                const slugNoSlash = slug.split('/').slice(1)
                return [
                    ...acc,
                    {
                        params: { slug: slugNoSlash },
                        locale: 'ru',
                    },
                    {
                        params: { slug: slugNoSlash },
                        locale: 'en',
                    },
                ]
            }, []),
        fallback: false,
    }
}

export default Page
