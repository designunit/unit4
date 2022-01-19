import * as React from 'react'
import s from './index.module.css'

export interface IWideBlockProps {
    style?: React.CSSProperties
}

export const WideBlock: React.FC<IWideBlockProps> = props => (
    <div
        className={s.container}
        style={props.style}
    >
        {props.children}
    </div>
)
