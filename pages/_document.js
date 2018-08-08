import Document, { Head, Main, NextScript } from 'next/document'
import YMetrika from '../components/YMetrika'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <html lang='ru'>
        <Head>
          <link rel="stylesheet" href="/static/style.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="icon" href="/static/favicon1.png" type="image/x-icon" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
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