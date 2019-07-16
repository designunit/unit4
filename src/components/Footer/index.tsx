import * as React from 'react'

export const Footer: React.FC = () => (
    <footer>
        <style jsx>{`
            footer {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                font-size: var(--font-second-size);
            }

            a {
                color: var(--color-light);
            }

            a:hover {
                color: var(--link-color-active);
            }

            section {
                color: var(--color-light);
            }
        `}</style>

        <section>© 2017-2019 design unit 4</section>
        <section>
            <a
                href='mailto:inbox@unit4.io'
                target={'_blank'}
            >
                inbox@unit4.io
            </a>
        </section>
    </footer>
)
