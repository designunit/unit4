import '@/style.css'

import { DefaultLayout } from '@/components/DefaultLayout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { YMetrika } from '@/components/YMetrika'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import '@/i18n'
import { NextSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const { i18n } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(router.locale)
    }, [i18n, router.locale])

    // scroll page to top on path change
    useEffect(() => {
        if (document) {
            document.querySelector('body')!.scrollTo(0, 0)
        }
    }, [router.asPath])

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/static/favicon.png" type="image/x-icon" />

                <meta name="yandex-verification" content="9248f3170aa2f950" />
                <YMetrika
                    account={'47295549'}
                />
            </Head>

            <NextSeo
                title={'design : : unit 4'}
                description={''}
                openGraph={{
                    title: 'design : : unit 4',
                    description: '',
                    url: `https://unit4.io${router.asPath}`,
                    images: [
                        {
                            url: '/static/logo_unit4.jpg',
                        },
                    ],
                }}
            />

            <DefaultLayout
                showHeader={true}
                center={true}
                title={'design unit4'}
            >
                <Component {...pageProps} />
            </DefaultLayout >
        </>
    )
}

export default MyApp
