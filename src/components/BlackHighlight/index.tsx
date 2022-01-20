import { CSSProperties } from 'react'
import s from './index.module.css'

export type BlackHighlightProps = {
    style?: CSSProperties
}

export const BlackHighlight: React.FC<BlackHighlightProps> = ({ children, style }) => (
    <span className={s.container} style={style}>
        {children}
    </span>
)
