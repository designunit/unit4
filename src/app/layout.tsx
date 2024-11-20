import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { YMetrika } from '@/components/YMetrika'
import { Logo } from '@/components/Logo'
import { Menu } from '@/components/Menu'

import s from './layout.module.css'
import '@/style.css'
import { DEFAULT_COVER, MAILTO, MENU, YANDEX_METRIKA, YANDEX_VERIFICATION } from '@/constants'

const font = Roboto({ weight: ["400", "900"], subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
    title: 'design unit 4',
    description: 'Студия средового дизайна',
    openGraph: {
        images: [
            DEFAULT_COVER,
        ],
    },
    twitter: {
        card: 'summary_large_image'
    }
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const themeColor = "ff0066";
    return (
        <html lang="ru">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="shortcut icon"
                    href="/static/favicon.png"
                    type="image/x-icon"
                />

                <meta name="yandex-verification" content={YANDEX_VERIFICATION} />
                <YMetrika account={YANDEX_METRIKA} />
                <meta name="theme-color" content={themeColor} />

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
    );
}
