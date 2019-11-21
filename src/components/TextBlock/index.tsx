import * as React from 'react'

export const TextBlock: React.FC = ({children}) => (
    <div>
        <style jsx>{`
            div {
                --text-block-width: 50%;

                min-width: 300px;
                width: var(--text-block-width);
                hyphens: auto;
                margin-bottom: 1em;
            }

            @media screen and (max-width: 1280px) {
                div {
                    --text-block-width: 40%;
                }
            }

            @media screen and (max-width: 31.25em) {
                div {
                    --text-block-width: 100%;
                }
            }
        `}</style>

        {children}
    </div>
)
