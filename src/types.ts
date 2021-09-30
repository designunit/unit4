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
