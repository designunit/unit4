import Document, { Head, Main, NextScript } from 'next/document'

function YandexMetrika({ counterId }) {
  const script = `
  (function (d, w, c) {
    (w[c] = w[c] || []).push(function () {
      try {
        w.yaCounter${counterId} = new Ya.Metrika({
          id: ${counterId},
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true
        });
      } catch (e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
    f = function () {n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
      d.addEventListener("DOMContentLoaded", f, false);
    } else {f(); }
  })(document, window, "yandex_metrika_callbacks");
  `
  return (
    <script type="text/javascript">
      {script}
    </script>
  )
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <YandexMetrika
            counterId={'47295549'}
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