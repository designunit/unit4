import { ImageSet } from '@/components/ImageSet'
import { Image } from '@/components/Image'
import { Title } from '@/components/Title'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import ErrorPage from 'next/error'
import remark from 'remark'
import html from 'remark-html'
import { Meta } from '@/components/Meta'
import { SwitchImage } from '@/components/SwitchImage'
import { Embed } from '@/components/Embed'
import { WideBlock } from '@/components/WideBlock'

function getPathParts(path: string): string[] {
    return path
        .split('/')
        .filter(Boolean)
}

async function apiGetPage(slug: string, locale: string): Promise<any> {
    const url = `https://unit.tmshv.com/unit-4-pages?slug=${slug}`
    try {
        const res = await fetch(url)
        if (!res.ok) {
            return null
        }
        let data = await res.json()
        if (data.length === 0) {
            return null
        }

        return getPage(data[0], locale)
    } catch (error) {
        return null
    }
}

async function apiGetPaths(): Promise<string[]> {
    const url = `https://unit.tmshv.com/unit-4-pages/paths`

    try {
        const res = await fetch(url)
        if (!res.ok) {
            return []
        }

        let data = await res.json()
        if (data.length === 0) {
            return []
        }

        return data.map((x: any) => x.slug)
    } catch (error) {
        return []
    }
}

type ImageFormatDto = {
    url: string
    name: string
    hash: string
    ext: string
    mime: string
    width: number
    height: number
    size: number
    path?: string
}

type ImageDto = {
    id: number
    url: string
    name: string
    hash: string
    ext: string
    mime: string
    width: number
    height: number
    size: number
    path?: string
    previewUrl?: string
    provider: string
    provider_metadata?: object
    created_at: string
    updated_at: string
    caption?: string
    formats: {
        thumbnail: ImageFormatDto,
        large: ImageFormatDto,
        medium: ImageFormatDto,
        small: ImageFormatDto,
    }
}

type ComponentTextDto = {
    id: number
    component: 'unit-4.text'
    text: string
}

type ComponentImageDto = {
    id: number
    component: 'unit-4.image'
    image: ImageDto
    wide: boolean
}

type ComponentCarouselDto = {
    id: number
    component: 'unit-4.carousel'
    switchType: string
    wide: boolean
    media: ImageDto[]
}

type ComponentTwoImagesDto = {
    id: number
    component: 'unit-4.two-images'
    image1: ImageDto
    image2: ImageDto
    ratio: number
}

type ComponentSwitchImageDto = {
    id: number
    component: 'unit-4.switch-image'
    type: string
    image1: ImageDto
    image2: ImageDto
    label1: string
    label2: string
}

type ComponentCompareDto = {
    id: number
    component: 'unit-4.switch-image'
    type: string
    image1: ImageDto
    image2: ImageDto
    label1: string
    label2: string
}

type ComponentEmbedDto = {
    id: number
    component: 'unit-4.embed'
    url: string
}

type ComponentDto =
    ComponentTextDto
    | ComponentImageDto
    | ComponentCarouselDto
    | ComponentTwoImagesDto
    | ComponentSwitchImageDto
    | ComponentEmbedDto

async function markdownToHtml(markdown: string) {
    const result = await remark()
        .use(html)
        .process(markdown)
    return result.toString()
}

function one<T>(param: T | T[]): T {
    if (Array.isArray(param)) {
        return param[0]
    }

    return param
}

function ensureSlash(value: string): string {
    if (value.charAt(0) === '/') {
        return value
    }

    return `/${value}`
}

async function getPage(data: any, locale: string) {
    let { content, excerpt, cover, slug } = data
    cover = one(cover)
    const title = getLocalizedValue(data, locale, 'title')
    content = await getPageContent(content, locale)

    return {
        content,
        excerpt,
        title,
        cover,
    }
}

async function getPageContent(content: any[], locale): Promise<ComponentDto[]> {
    return Promise.all(content.map(async item => {
        const { __component: component } = item

        switch (component) {
            case 'unit-4.text': {
                let text = getLocalizedValue(item, locale, 'text')
                text = await markdownToHtml(text)

                return {
                    component,
                    text,
                }
            }

            case 'unit-4.switch-image': {
                let label1 = getLocalizedValue(item, locale, 'label1')
                let label2 = getLocalizedValue(item, locale, 'label2')

                return {
                    component,
                    label1,
                    label2,
                    image1: item.image1,
                    image2: item.image2,
                }
            }

            case 'unit-4.two-images': {
                return {
                    component,
                    image1: item.image1,
                    image2: item.image2,
                    ratio: item.ratio ?? 0.5,
                }
            }
            default:
                return {
                    component,
                    ...item,
                }
        }
    }))
}

function getLocalizedValue(data: any, locale: string, field: string): any {
    let key = field
    if (locale === 'en') {
        key = `${field}_en`
    }

    return data[key]
}

type Props = {
    title: string
    excerpt: string
    data: any
    cover: ImageDto
    slug: string
}

const Page: NextPage<Props> = props => {
    if (!props.data) {
        return (
            <ErrorPage statusCode={404} />
        )
    }

    const url = `https://unit4.io${props.slug}`
    const coverUrl = props.cover?.formats?.large?.url

    return (
        <div>
            <article>
                <Title>{props.title}</Title>
                <Meta
                    title={props.title}
                    description={props.excerpt}
                    image={coverUrl}
                    url={url}
                />

                {props.data.content.map((item: ComponentDto, i) => {
                    const id = i // todo plz use item.id

                    if (item.component === 'unit-4.text') {
                        return (
                            <div
                                key={id}
                                dangerouslySetInnerHTML={{ __html: item.text }} style={{
                                    // marginBottom: '16px',
                                }}
                            />
                        )
                    }

                    if (item.component === 'unit-4.image') {
                        const content = (
                            <Image
                                key={id}
                                src={item.image.url}
                            />
                        )
                        return !item.wide ? content : (
                            <WideBlock>
                                {content}
                            </WideBlock>
                        )
                    }

                    if (item.component === 'unit-4.embed') {
                        return (
                            <Embed
                                key={id}
                                src={item.url}
                            />
                        )
                    }

                    if (item.component === 'unit-4.carousel') {
                        const links = item.media.map(item => item.url)

                        if (links.length === 1) {
                            return (
                                <Image
                                    key={id}
                                    src={links[0]}
                                />
                            )
                        }

                        return (
                            <ImageSet
                                key={id}
                                items={links}
                                layout={{
                                    slider: {
                                        // transition: 'crossfade',
                                        transition: item.switchType as any,
                                        autoplay: 2000,
                                    }
                                }}
                                style={{
                                    // marginBottom: '16px',
                                }}
                            />
                        )
                    }

                    if (item.component === 'unit-4.two-images') {
                        const links = [
                            item.image1.url,
                            item.image2.url,
                        ]
                        const l = Math.round(24 * item.ratio)
                        const r = 24 - l
                        const layout = {
                            span: [l, r],
                        }

                        return (
                            <ImageSet
                                key={id}
                                items={links}
                                layout={layout}
                                style={{
                                    // marginBottom: '16px',
                                }}
                            />
                        )
                    }

                    if (item.component === 'unit-4.switch-image') {
                        const links = [
                            {
                                src: item.image1.url,
                                buttonText: item.label1,
                            },
                            {
                                src: item.image2.url,
                                buttonText: item.label2,
                            },
                        ]
                        return (
                            <SwitchImage
                                images={links}
                            />
                        )
                    }

                    return (
                        <pre key={id}>
                            {JSON.stringify(item, null, 4)}
                        </pre>
                    )
                })}
            </article>

            {/* <pre>
                {JSON.stringify(props, null, 4)}
            </pre> */}
        </div>
    )
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
    const locale = ctx.locale
    let slug = ctx.params.slug
    if (!slug) {
        return {
            props: {
                title: '',
                data: null,
                excerpt: null,
                slug: null,
                cover: null,
            }
        }
    }
    slug = ensureSlash(one(slug))

    const data = await apiGetPage(slug, locale)
    if (!data) {
        return {
            props: {
                title: '',
                data: null,
                excerpt: null,
                slug,
                cover: null,
            }
        }
    }

    return {
        revalidate: 1,
        props: {
            data,
            title: data.title,
            excerpt: data.excerpt,
            slug,
            cover: data.cover,
        }
    }
}

export const getStaticPaths: GetStaticPaths = async ctx => {
    const paths = await apiGetPaths()
    return {
        fallback: true,
        paths: paths.map(slug => ({
            params: {
                slug: getPathParts(slug),
            },
        })),
    }
}

export default Page
