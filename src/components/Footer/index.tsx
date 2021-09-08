import * as React from 'react'
import { LangButton } from '../LangButton'

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
                display: flex;
                color: var(--color-light);
                flex-direction: column;
            }

            section.right {
                align-items: flex-end;
            }
        `}</style>

        <section>© 2017-2021 design unit 4</section>
        <section className={'right'}>
            <a
                href='mailto:inbox@unit4.io'
                target={'_blank'}
            >
                inbox@unit4.io
            </a>
            <LangButton style={{
                marginTop: 10,
            }}/>
        </section>
    </footer>
)
