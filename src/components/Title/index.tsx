import * as React from 'react'
import s from './index.module.css'
import Head from 'next/head'
import cx from 'classnames'

export interface ITitleProps {
    caption?: string
}

export const Title: React.FC<ITitleProps> = ({ caption, children }) => (
    <div className={s.title}>
        <Head>
            <title>{children}</title>
        </Head>

        <h1 className={s.h1}>
            {children}
        </h1>

        <p className={cx(s['title-caption'])}>
            {caption}
        </p>
    </div>
)
