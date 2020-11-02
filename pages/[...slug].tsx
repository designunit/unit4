import { ImageSet } from '@/components/ImageSet'
import Image from 'next/image'
import { Title } from '@/components/Title'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import ErrorPage from 'next/error'
import remark from 'remark'
import html from 'remark-html'
import { Meta } from '@/components/Meta'
import { SwitchImage } from '@/components/SwitchImage'
import { Embed } from '@/components/Embed'
import { UnitHighlight } from '@/components/UnitHighlight'
import { WideBlock } from '@/components/WideBlock'
import CompareImage from 'react-compare-image'
import { useRouter } from 'next/router'
import { Carousel } from '@/components/Carousel'
import { IImageProps } from '@/components/Image'

function getPathParts(path: string): string[] {
    return path
        .split('/')
        .filter(Boolean)
}

async function apiGetLinkBlock(id: number, locale: string): Promise<any> {
    const url = `https://unit.tmshv.com/unit-4-link-blocks/${id}`
    try {
        const res = await fetch(url)
        if (!res.ok) {
            return null
        }
        let data = await res.json()
        if (data.length === 0) {
            return null
        }

        return data.items.map((item, i) => ({
            // "__component": "unit-4.link",
            component: item.__component,
            href: item.href,
            id: i,
            newTab: item.newTab ?? false,
            text: getLocalizedValue(item, locale, 'text'),
        }))
    } catch (error) {
        return null
    }
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

type ComponentLinkDto = {
    id: number
    component: 'unit-4.link'
    href: string
    text: string
    newTab: boolean
}

type ComponentLinkBlockDto = {
    id: number
    component: 'unit-4.link-block'
    items: ComponentLinkDto[]
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
    component: 'unit-4.compare'
    before: ImageDto
    after: ImageDto
    startRatio: number
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
    | ComponentLinkBlockDto
    | ComponentCompareDto

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

            case 'unit-4.carousel': {
                if (item.media.length === 1) {
                    return {
                        component: 'unit-4.image',
                        image: item.media[0],
                        wide: item.wide,
                    }
                }

                return {
                    component,
                    ...item,
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

            case 'unit-4.link-block': {
                let items = await apiGetLinkBlock(item.block.id, locale)
                items = items ?? []
                return {
                    component,
                    items,
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
    const router = useRouter()
    if (router.isFallback) {
        return (
            <div>loading</div>
        )
    }

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
                        const img = item.image
                        const content = (
                            <Image
                                key={id}
                                src={img.url}
                                width={img.width}
                                height={img.height}
                                quality={85}
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
                        const items = item.media.map(item => ({
                            src: item.url,
                            width: item.width,
                            height: item.height,
                        }))

                        return (
                            <Carousel
                                key={id}
                                images={items}
                                slider={{
                                    transition: item.switchType as any,
                                    autoplay: 2000,
                                }}
                            />
                        )
                    }

                    if (item.component === 'unit-4.two-images') {
                        const images: IImageProps[] = [item.image1, item.image2,]
                            .map(x => ({
                                src: x.url,
                                width: x.width,
                                height: x.height,
                            }))
                        const l = Math.round(24 * item.ratio)
                        const r = 24 - l
                        const layout = {
                            span: [l, r],
                        }

                        return (
                            <ImageSet
                                key={id}
                                items={images}
                                layout={layout}
                            />
                        )
                    }

                    if (item.component === 'unit-4.compare') {
                        return (
                            <CompareImage
                                key={id}
                                sliderPositionPercentage={0.75}
                                leftImage={item.after.url}
                                rightImage={item.before.url}
                            />
                        )
                    }

                    if (item.component === 'unit-4.link-block') {
                        return (
                            <UnitHighlight
                                items={item.items}
                            />
                        )
                    }

                    if (item.component === 'unit-4.switch-image') {
                        const links = [
                            {
                                src: item.image1.url,
                                width: item.image1.width,
                                height: item.image1.height,
                                buttonText: item.label1,
                            },
                            {
                                src: item.image2.url,
                                width: item.image2.width,
                                height: item.image2.height,
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
        revalidate: 30,
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
