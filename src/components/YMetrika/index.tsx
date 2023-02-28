import * as React from 'react'

function getMetrika(account: string): string {
    return `
        <!-- Yandex.Metrika counter -->
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter${account} = new Ya.Metrika({
                        id:${account},
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                    });
                } catch(e) { }
            });

            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks");
        <!-- /Yandex.Metrika counter -->
    `
}

export interface IYMetrikaProps {
    account: string
}

export const YMetrika: React.FC<IYMetrikaProps> = props => {
    const script = getMetrika(props.account)

    return (
        <script dangerouslySetInnerHTML={{ __html: script }} />
    )
}
