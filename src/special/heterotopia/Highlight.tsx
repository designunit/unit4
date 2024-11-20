'use client'

export type HighlightProps = {
    children: React.ReactNode
}

const Highlight: React.FC<HighlightProps> = ({ children }) => (
    <b>
        <style jsx>{`
            b {
                text-transform: uppercase;
                margin: 0 2px;
                color: var(--color-text-opposite);
                background-color: var(--color-background-opposite);
            }
        `}</style>

        {children}
    </b>
)

export default Highlight
