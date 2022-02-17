import classNames from 'classnames'
import React, { CSSProperties } from 'react'
import s from './runningLine.module.css'

export const RunningLine: React.FC<{ style?: CSSProperties, direction?: 'left' | 'right', speed?: string }> = ({ children, style, direction = 'left', speed = '20s' }) => {
    return (
        <div className={classNames(s.container, direction == 'left' && s.left, direction == 'right' && s.right)} style={style} >
            {children}
            {children}
        </div>
    )
}