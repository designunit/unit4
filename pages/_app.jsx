import React from 'react'
import App from 'next/app'
import { DefaultLayout } from '../src/components/DefaultLayout'
import { Article } from '../src/components/Article'
import { appWithTranslation } from '../src/i18n'

import 'antd/dist/antd.less'
import '../src/style.css'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        const isMdx = Component.hasOwnProperty('isMDXComponent') ? Component.isMDXComponent : false
        const content = isMdx ? (
            <Article>
                <Component {...pageProps} />
            </Article>
        ) : (
                <Component {...pageProps} />
            )

        return (
            <DefaultLayout
                showHeader={true}
                center={true}
                title={'design unit4'}
            >
                {content}
            </DefaultLayout >
        )
    }
}

export default appWithTranslation(MyApp)
