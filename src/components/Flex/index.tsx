import classNames from 'classnames'
import React from 'react'
import s from './index.module.css'

export const Flex: React.FC<any> = ({ children, col, style }) => {
    return (
        <div
            style={style}
            className={classNames(s.container, col && s.col)}
        >
            {children}
        </div>
    )
}