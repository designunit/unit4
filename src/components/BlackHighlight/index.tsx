import s from './index.module.css'

export type BlackHighlightProps = {
    children: React.ReactNode
    style?: React.CSSProperties
}

export const BlackHighlight: React.FC<BlackHighlightProps> = ({ children, style }) => (
    <span className={s.container} style={style}>
        {children}
    </span>
)
