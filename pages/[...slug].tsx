import { Title } from '@/components/Title'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import ErrorPage from 'next/error'
import { Meta } from '@/components/Meta'
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
import { projects } from './projects'
import { useTranslation } from 'react-i18next'

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

    const projectItem = projects.find(x => props.slug === x.href)

    const { t } = useTranslation()

    return (
        <div>
            <Meta
                title={projectItem?.text && t(projectItem.text, { ns: 'projects' })}
                description={props.excerpt}
                image={projectItem?.src}
                url={`https://unit4.io${props.slug}`}
            />

            {/* TODO */}
            {/* {props.contentLocale === router.locale ? null : (
                <div>Warning! Locale is different</div>
            )} */}

            <article>
                <MDXRemote {...props.source} components={mdxComponents} />
            </article>
        </div>
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
            .map(({ slug, locale }) => {
                const slugNoSlash = slug.split('/').slice(1)

                return {
                    params: { slug: slugNoSlash },
                    locale,
                }
            }),
        fallback: false,
    }
}

export default Page
