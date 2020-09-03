import Document, { Head, Main, NextScript } from 'next/document'
import { YMetrika } from '../src/components/YMetrika'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        return { ...initialProps }
    }

    render() {
        return (
            <html lang='ru'>
                <Head>
                    <meta name="yandex-verification" content="9248f3170aa2f950" />
                    <link rel="icon" href="/static/favicon1.png" type="image/x-icon" />

                    <script src={'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'} type={'text/javascript'} />

                    <script src={'https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js'} type={'text/javascript'} />
                    <link rel={'stylesheet'} href={'https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css'} />

                    <YMetrika
                        account={'47295549'}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
