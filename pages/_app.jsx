import React from 'react'
import App, { Container } from 'next/app'
import { DefaultLayout } from '../src/components/DefaultLayout'
import { Article } from '../src/components/Article'

import 'antd/dist/antd.less'
import '../src/style.less'

export default class MyApp extends App {
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

        if (pageProps['layout'] === 'none') {
            return (
                <Container>
                    {content}
                </Container>
            )
        }

        return (
            <Container>
                <DefaultLayout
                    showHeader={true}
                    center={true}
                    title={'design unit4'}
                >
                    {content}
                </DefaultLayout >
            </Container>
        )
    }
}