import s from './title.module.css'
import { createElement } from 'react'

export type TitleProps = {
    children: React.ReactNode
    caption?: string
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Title: React.FC<TitleProps> = ({ as = 'h1', caption, children }) => {
    if (!caption) {
        return createElement(as, { className: `${s.title} ${s.h1}` }, children)
    }

    const title = createElement(as, { className: s.h1 }, children)
    return (
        <div className={s.title}>
            {title}

            <p className={s.caption}>
                {caption}
            </p>
        </div>
    )
}
