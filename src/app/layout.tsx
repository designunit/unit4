import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import { YMetrika } from '@/components/YMetrika'
import { Logo } from '@/components/Logo'
import { Menu } from '@/components/Menu'
import { DEFAULT_COVER, MAILTO, MENU, THEME_COLOR, YANDEX_METRIKA, YANDEX_VERIFICATION } from '@/constants'

import '@/style.css'
import s from './layout.module.css'
import { getPageBySlug } from '@/api'

const font = Roboto({ weight: ['400', '900'], subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://unit4.io'),
    title: 'design unit 4',
    description: 'Студия средового дизайна',
    openGraph: {
        siteName: 'дизайн юнит 4',
        images: [
            DEFAULT_COVER,
        ],
    },
    twitter: {
        card: 'summary_large_image',
    },
}

export function generateViewport({ params }: { params: { slug: string }}): Viewport {
    const { slug } = params
    const page = getPageBySlug('ru', slug)
    const themeColor = page?.themeColor ?? THEME_COLOR
    return {
        themeColor,
    }
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <head>
                <link
                    rel="shortcut icon"
                    href="/static/favicon.png"
                    type="image/x-icon"
                />

                <meta name="yandex-verification" content={YANDEX_VERIFICATION} />
                <YMetrika account={YANDEX_METRIKA} />

                <link
                    rel="alternate"
                    type="application/rss+xml"
                    href="/feed.xml"
                />
            </head>

            <body className={`${s.layout} ${font.className}`}>
                <header>
                    <Logo
                        href={'/'}
                        invert={false}
                    />
                    <Menu items={MENU} />
                    <Menu items={MENU} mobile />
                </header>
                <main className={s.content}>{children}</main>
                <footer>
                    <section>© 2017-2024 design unit 4</section>
                    <section className={s.right}>
                        <a
                            href={MAILTO}
                            target={'_blank'}
                            rel="noreferrer"
                        >
                            inbox@unit4.io
                        </a>
                    </section>
                </footer>
            </body>
        </html>
    )
}
