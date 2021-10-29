import React from 'react'
import s from './runningLine.module.css'

export const RunningLine: React.FC = ({ children }) => {
    return (
        <div className={s.container}>
            {children}
            {children}
        </div>
    )
}