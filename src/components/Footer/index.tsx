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

            .copyright {
                color: var(--color-light);
            }
        `}</style>

        <p className='copyright'>© 2017-2019 design unit 4</p>
        <p>
            <a
                href='mailto:inbox@unit4.io'
                target={'_blank'}
            >
                inbox@unit4.io
            </a>
        </p>
    </footer>
)
