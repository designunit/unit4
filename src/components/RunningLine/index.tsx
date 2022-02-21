import classNames from 'classnames'
import React, { CSSProperties } from 'react'
import s from './runningLine.module.css'

type RunningLineProps = { style?: CSSProperties, direction?: 'left' | 'right', animationDuration?: string }

export const RunningLine: React.FC<RunningLineProps> = ({ children, style, direction = 'left', animationDuration = '20s' }) => {
    return (
        <div className={classNames(s.container, direction == 'left' && s.left, direction == 'right' && s.right)} style={style} >
            <span style={{ animationDuration }}>
                {children}
            </span>
            <span style={{ animationDuration }}>
                {children}
            </span>
        </div>
    )
}