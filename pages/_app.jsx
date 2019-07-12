import React from 'react'
import App, { Container } from 'next/app'
import DefaultLayout from '../components/DefaultLayout'
import Article from '../components/Article'

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        const isMdx = Component.hasOwnProperty('isMDXComponent') ? Component.isMDXComponent : false
        const content = isMdx ? (
            <Article>
                <Component {...pageProps}/>
            </Article>
        ) : (
            <Component {...pageProps}/>
        )

        return (
            <Container>
                <DefaultLayout>
                    {content}
                </DefaultLayout >
            </Container>
        )
    }
}