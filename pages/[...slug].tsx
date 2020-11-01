import { ImageSet } from '@/components/ImageSet'
import { Image } from '@/components/Image'
import { Title } from '@/components/Title'
import { GetServerSideProps, NextPage } from 'next'
import ErrorPage from 'next/error'
import remark from 'remark'
import html from 'remark-html'
import { Meta } from '@/components/Meta'

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
    type: string
    image1: ImageDto
    image2: ImageDto
}

type ComponentDto = ComponentTextDto | ComponentCarouselDto | ComponentTwoImagesDto

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

    return (
        <div>
            <article>
                <Title>{props.title}</Title>
                <Meta
                    title={props.title}
                    description={props.excerpt}
                    image={props.cover.formats.large.url}
                    // image={''}
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

                        return (
                            <ImageSet
                                key={id}
                                items={links}
                                style={{
                                    // marginBottom: '16px',
                                }}
                            />
                        )
                    }

                    return null
                })}
            </article>

            <pre>
                {JSON.stringify(props, null, 4)}
            </pre>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async ctx => {
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

    try {
        const res = await fetch(`https://unit.tmshv.com/unit-4-pages?slug=${slug}`)
        if (!res.ok) {
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
        let data = await res.json()
        if (data.length === 0) {
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

        data = await getPage(data[0], locale)

        return {
            props: {
                data,
                title: data.title,
                excerpt: data.excerpt,
                slug,
                cover: data.cover,
            }
        }
    } catch (error) {
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
}

export default Page
