import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { YMetrika } from '@/components/YMetrika'
import { Logo } from '@/components/Logo'
import { Menu } from '@/components/Menu'
import { Footer } from '@/components/Footer'

import s from './layout.module.css'
import '@/style.css'
import { menu } from '@/constants'

const font = Roboto({ weight: ["400", "900"], subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
    // title: `Next.js Blog Example with ${CMS_NAME}`,
    // description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
    openGraph: {
        // images: [HOME_OG_IMAGE_URL],
    },
};

// <NextSeo
//     title={'design : : unit 4'}
//     description={''}
//     openGraph={{
//         title: 'design : : unit 4',
//         description: '',
//         url: `https://unit4.io${router.asPath}`,
//         images: [
//             {
//                 url: '/static/logo_unit4.jpg',
//             },
//         ],
//     }}
// />

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

                <meta name="yandex-verification" content="9248f3170aa2f950" />
                {/* <YMetrika account={"47295549"} /> */}
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
                    <Menu items={menu} />
                </header>
                <main className={s.content}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
