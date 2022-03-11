export type PageDefinition = {
    year?: number
    city?: string

    cover?: string
    excerpt: string
    tags: string[]

    title: string | null
    date: string | null
    slug: string
    [name: string]: any
}

export type ImageProps = {
    src: string
    alt?: string
    width: number
    height: number
}

export enum CardSize {
    small = 1,
    medium = 2,
    big = 4,
}
