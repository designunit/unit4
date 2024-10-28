import { readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { globSync } from 'glob'
import matter from 'gray-matter'
import { parse } from 'date-fns'
import type { PageDefinition } from '@/types'

export type Lang = string
const defaultLocale: Lang = 'ru'

const postsDirectory = join(process.cwd(), 'data')

export function getPages(): {path: string, slug: string, locale: string}[] {
    const pattern = join(postsDirectory, '*.md?(x)')
    return globSync(pattern, {})
        .map(path => ({
            path,
            slug: getSlugFromPath(path),
            locale: getLocaleFromPath(path),
        }))
}

function getSlugFromPath(path: string): string {
    return relative(postsDirectory, path)
        .replace(/\w{2}\.mdx?$/, '')
        .replace(/\.$/, '')
        .replace(/\/$/, '')
}

function getLocaleFromPath(path: string): string {
    const pattern = /(.{2})\.mdx?$/
    const m = pattern.exec(path)
    if (!m) {
        return defaultLocale
    }

    return m[1]
}

export function getPageBySlug(lang: Lang, slug: string): PageDefinition | null {
    let path = join(postsDirectory, `${slug}.${lang}.mdx`)
    return getPage(path)
}

function getPage(path: string): PageDefinition | null {
    const slug = getSlugFromPath(path)
    try {
        const fileContents = readFileSync(path, 'utf8')
        const { data, content } = matter(fileContents)

        const title = getTitle(content)

        const tags: string[] = data.tags ?? []
        const excerpt: string = data.excerpt ?? ''
        const cover: string = data.cover ?? ''

        const date = data.date ?
            parse(data.date, 'dd.MM.yyyy', new Date())
                .toString()
            : null

        return {
            ...data,
            date,
            cover,
            excerpt,
            tags,
            title,
            slug,
            content,
        }
    } catch (err) {
        console.error(`Failed to get page ${slug}:`, (err as any as Error).message)
        return null
    }
}

function getTitle(data: string): string | null  {
    const rows = data.split('\n')
    const p = /#\s?(.*)/
    for (const row of rows) {
        const m = p.exec(row)
        if (!m) {
            continue
        }

        return m[1]
    }

    return null
}
