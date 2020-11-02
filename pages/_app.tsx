import { DefaultLayout } from '@/components/DefaultLayout'
import { Article } from '@/components/Article'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { YMetrika } from '@/components/YMetrika'
import '@/i18n'
import { MDXProvider } from '@mdx-js/react'
import { components } from '@/mdx'

import 'antd/dist/antd.less'
import '../src/style.css'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const { i18n } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(router.locale)
    }, [router.locale])

    const isMdx = Component.hasOwnProperty('isMDXComponent') ? Component['isMDXComponent'] : false
    const content = isMdx ? (
        <Article>
            <Component {...pageProps} />
        </Article>
    ) : (
            <Component {...pageProps} />
        )

    return (
        <MDXProvider components={components}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/static/favicon1.png" type="image/x-icon" />

                <meta name="yandex-verification" content="9248f3170aa2f950" />
                {/* <YMetrika
                    account={'47295549'}
                /> */}
            </Head>

            <DefaultLayout
                showHeader={true}
                center={true}
                title={'design unit4'}
            >
                {content}
            </DefaultLayout >
        </MDXProvider>
    )
}

export default MyApp
