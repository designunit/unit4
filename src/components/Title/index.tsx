import s from './index.module.css'
import Head from 'next/head'
import cx from 'classnames'
import { createElement } from 'react'

export type TitleProps = {
    children: React.ReactNode
    caption?: string
    writeToHead?: boolean
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Title: React.FC<TitleProps> = ({ as = 'h1', caption, children, writeToHead = false }) => {
    const title = createElement(as, { className: s.h1 }, children)
    return (
        <div className={s.title}>
            {!writeToHead ? null : (
                <Head>
                    <title>{children}</title>
                </Head>
            )}

            {title}

            <p className={cx(s['title-caption'])}>
                {caption}
            </p>
        </div>
    )
}
