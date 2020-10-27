import { DefaultLayout } from '@/components/DefaultLayout'
import { Article } from '@/components/Article'
// import { appWithTranslation } from '../src/i18n'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { LangContext } from '@/context/lang'
import { YMetrika } from '@/components/YMetrika'

import 'antd/dist/antd.less'
import '../src/style.css'

import ru from '@/ru.json'
import en from '@/en.json'
import { useRouter } from 'next/router'

function useDetectLang() {
    const router = useRouter()

    const isEn = /^\/en/.test(router.asPath)
    if (isEn) {
        return 'en'
    }

    return 'ru'
}

function MyApp({ Component, pageProps }: AppProps) {
    const lang = useDetectLang()
    // const translations = new Map<string, string>([
    //     ['hello', 'hello'],
    // ])
    const langDict = lang === 'ru' ? ru : en
    const translations = new Map(Object.entries(langDict))
    const isMdx = Component.hasOwnProperty('isMDXComponent') ? Component['isMDXComponent'] : false
    const content = isMdx ? (
        <Article>
            <Component {...pageProps} />
        </Article>
    ) : (
            <Component {...pageProps} />
        )

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/static/favicon1.png" type="image/x-icon" />

                <script src={'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'} type={'text/javascript'} />

                <script src={'https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js'} type={'text/javascript'} />
                <link rel={'stylesheet'} href={'https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css'} />

                <meta name="yandex-verification" content="9248f3170aa2f950" />
                <YMetrika
                    account={'47295549'}
                />
            </Head>

            <LangContext.Provider value={{
                lang,
                translations,
            }}>
                <DefaultLayout
                    showHeader={true}
                    center={true}
                    title={'design unit4'}
                >
                    {content}
                </DefaultLayout >
            </LangContext.Provider>
        </>
    )
}


// MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

// MyApp.getInitialProps = async (appContext) => {
//     const appProps = await App.getInitialProps(appContext)
//     return {
//         ...appProps,
//     }
// }

// export default appWithTranslation(MyApp)
export default MyApp
