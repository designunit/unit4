import { getPageBySlug } from '@/api'
import { THEME_COLOR } from '@/constants'
import type { Viewport } from 'next'

type Params = Promise<{ slug: string }>

export async function generateViewport({ params }: { params: Params}): Promise<Viewport> {
    const { slug } = await params
    const page = getPageBySlug('ru', slug)
    const themeColor = page?.themeColor ?? THEME_COLOR
    return {
        themeColor,
    }
}

export default async function SlugLayout({ children, params }: { children: React.ReactNode, params: Params }) {
    const { slug } = await params
    const page = getPageBySlug('ru', slug)
    const themeColor = page?.themeColor

    return (
        <>
            {!themeColor ? null : (
                <style>
                    {`
                        :root {
                            --color-background: ${themeColor};
                        }
                    `}
                </style>
            )}
            <article>
                {children}
            </article>
        </>
    )
}
