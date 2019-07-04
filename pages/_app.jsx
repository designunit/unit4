import React from 'react'
import App, { Container } from 'next/app'
import DefaultLayout from '../components/DefaultLayout'

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout >
            </Container>
        )
    }
}