import React, { CSSProperties } from 'react'
import s from './runningLine.module.css'

export const RunningLine: React.FC<{ style?: CSSProperties }> = ({ children, style }) => {
    return (
        <div className={s.container} style={style}>
            {children}
            {children}
        </div>
    )
}