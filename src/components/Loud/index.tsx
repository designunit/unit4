import { CSSProperties } from 'react'
import s from './loud.module.css'

export type LoudProps = {
    style?: CSSProperties
}

export const Loud: React.FC<LoudProps> = ({ children, style }) => (
    <div className={s.container} style={style}>
        <span className={s.multiline}>
            {children}
        </span>
    </div>
)
