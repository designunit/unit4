import * as React from 'react'

import Contact from '../../../components/Contact'

export const Footer: React.FC = () => (
    <footer>
        <style jsx>{`
            footer {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                font-size: var(--font-second-size);
            }

            .copyright {
                color: var(--color-light);
            }
        `}</style>

        <p className="copyright">© 2017-2019 design unit 4</p>
        <p>
            <Contact
                href="mailto:inbox@unit4.io"
                mix="light"
                target={'_blank'}
            >
                inbox@unit4.io
            </Contact>
        </p>
    </footer>
)