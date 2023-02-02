import { createElement } from 'react'
import s from './loud.module.css'

export type LoudProps = {
    children: React.ReactNode
    style?: React.CSSProperties
    as?: React.ElementType
}

export const Loud: React.FC<LoudProps> = ({ as = 'div', ...props }) => {
    return createElement(as, {
        className: s.container,
        style: props.style,
    }, (
        <span className={s.multiline}>
            {props.children}
        </span>
    ))
}
