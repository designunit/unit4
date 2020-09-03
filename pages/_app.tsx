import { DefaultLayout } from '../src/components/DefaultLayout'
import { Article } from '../src/components/Article'
import { appWithTranslation } from '../src/i18n'
import Head from 'next/head'
import { AppProps } from 'next/app'

import 'antd/dist/antd.less'
import '../src/style.css'

function MyApp({ Component, pageProps }: AppProps) {
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
            </Head>

            <DefaultLayout
                showHeader={true}
                center={true}
                title={'design unit4'}
            >
                {content}
            </DefaultLayout >
        </>
    )
}

// MyApp.getInitialProps = async (appContext) => {
//     const appProps = await App.getInitialProps(appContext)
//     return { ...appProps }
// }

export default appWithTranslation(MyApp)
