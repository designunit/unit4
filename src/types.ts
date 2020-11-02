export type ImageProps = {
    src: string
    alt?: string
    width: number
    height: number
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

export type ImageDto = {
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

export type ComponentDto =
    ComponentTextDto
    | ComponentImageDto
    | ComponentCarouselDto
    | ComponentTwoImagesDto
    | ComponentSwitchImageDto
    | ComponentEmbedDto
    | ComponentLinkBlockDto
    | ComponentCompareDto