import { getPageBySlug } from '@/api'
import { THEME_COLOR } from '@/constants'
import type { Viewport } from 'next'

export async function generateViewport({ params }: { params: Promise<{ slug: string }>}): Promise<Viewport> {
    const { slug } = await params
    const page = getPageBySlug('ru', slug)
    const themeColor = page?.themeColor ?? THEME_COLOR
    return {
        themeColor,
    }
}

export default function SlugLayout({ children }: { children: React.ReactNode }) {
    return children
}
