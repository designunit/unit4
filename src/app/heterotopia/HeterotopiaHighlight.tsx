import * as React from 'react'

export const HeterotopiaHighlight: React.FC = props => (
    <b>
        <style jsx>{`
            b {
                text-transform: uppercase;
                margin: 0 2px;
                color: var(--color-text-opposite);
                background-color: var(--color-background-opposite);
            }
        `}</style>

        {props.children}
    </b>
)
