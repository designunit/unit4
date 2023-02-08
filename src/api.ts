import { promisify } from 'util'
import * as fs from 'fs'
import { join, relative } from 'path'
import glob from 'glob'
import matter from 'gray-matter'
import { parse } from 'date-fns'
import type { PageDefinition } from '@/types'

const readFile = promisify(fs.readFile)

export type Lang = string
const defaultLocale: Lang = 'ru'

const postsDirectory = join(process.cwd(), 'data')

export async function getPages() {
    const pattern = join(process.cwd(), 'data', '**/*.md?(x)')
    const files = await getFilesByPattern(pattern, {})

    return files.map(path => {
        const slug = getSlugFromPath(path)
        const locale = getLocaleFromPath(path)

        return {
            path,
            slug,
            locale,
        }
    })
}

async function getFilesByPattern(pattern: string, options: any) {
    return new Promise<string[]>((resolve, reject) => {
        glob(pattern, options, function(err, files: string[]) {
            if (err) {
                return reject(err)
            }

            resolve(files)
        })
    })
}

function getSlugFromPath(path: string): string {
    const rel = relative(postsDirectory, path)
    const realSlug = rel
        .replace(/\w{2}\.mdx?$/, '')
        .replace(/\.$/, '')
        .replace(/\/$/, '')

    return `/${realSlug}`
}

function getLocaleFromPath(path: string): string {
    const pattern = /(.{2})\.mdx?$/
    const m = pattern.exec(path)
    if (!m) {
        return defaultLocale
    }

    return m[1]
}

export async function getPageBySlug(lang: Lang | undefined, slug: string) {
    let path = join(postsDirectory, `${slug}.${lang}.mdx`)
    let page = await getPage(path)
    
    if (!page) {
        path = join(postsDirectory, `${slug}.${'ru'}.mdx`)
        page = await getPage(path)
    }

    if (page) {
        return page
    }

    return null
}

async function getPage(path: string): Promise<PageDefinition | null> {
    const slug = getSlugFromPath(path)
    try {
        const fileContents = await readFile(path, 'utf8')
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

function getTitle(data: string) {
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
