export type HeterotopiaHighlightProps = {
    children: React.ReactNode
}

export const HeterotopiaHighlight: React.FC<HeterotopiaHighlightProps> = props => (
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
