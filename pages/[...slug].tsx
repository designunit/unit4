import { Title } from '@/components/Title'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import ErrorPage from 'next/error'
import { Meta } from '@/components/Meta'
import { useRouter } from 'next/router'
import { PageDefinition } from '@/types'
import { getPageBySlug, getPages } from './api'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { Image } from '@/components/Image'
import { UnitHighlight } from '@/components/UnitHighlight'
import { Carousel } from 'antd'
import DatavizStage from '@/app/oymyakon/DatavizStage'
import { ImageSet } from '@/components/ImageSet'
import { WideBlock } from '@/components/WideBlock'

const mdxComponents = {
    Image,
    Carousel,
    UnitHighlight,
    Title,
    DatavizStage,
    ImageSet,
    WideBlock,
}

const Page: NextPage<PageDefinition> = props => {
    const router = useRouter()
    if (router.isFallback) {
        return (
            <div>loading</div>
        )
    }

    if (!props.source) {
        return (
            <ErrorPage statusCode={404} />
        )
    }

    return (
        <div>
            <Meta
                title={props.excerpt}
                description={null}
                image={null}
                url={`https://unit4.io${props.slug}`}
            />
            <article>
                <MDXRemote {...props.source} components={mdxComponents} />
            </article>
        </div>
    )
}

export const getStaticProps: GetStaticProps<PageDefinition> = async ctx => {
    let slug = ''
    if (ctx.params) {
        slug = (ctx.params!.slug! as string[]).join('/')
    }
    slug = '/' + slug

    const page = await getPageBySlug(ctx.locale, slug)

    if (!page) {
        return {
            notFound: true,
        }
    }

    const { content, ...def } = page
    const source = await serialize(content)

    return {
        revalidate: 30,
        props: {
            ...def,
            source,
        }
    }
}

export const getStaticPaths: GetStaticPaths = async ctx => {
    const pages = await getPages()

    return {
        paths: pages
            .map(({ slug, locale }) => {
                const slugNoSlash = slug.split('/').slice(1)

                return {
                    params: { slug: slugNoSlash },
                    locale,
                }
            }),
        fallback: true,
    }
}

export default Page
