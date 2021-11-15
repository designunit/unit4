import * as React from 'react'
import s from './index.module.css'
import Head from 'next/head'
import cx from 'classnames'

export interface ITitleProps {
    caption?: string
    writeToHead?: boolean
}

export const Title: React.FC<ITitleProps> = ({ caption, children, writeToHead = false }) => (
    <div className={s.title}>
        <Head>
            {writeToHead && <title>{children}</title>}
        </Head>

        <h1 className={s.h1}>
            {children}
        </h1>

        <p className={cx(s['title-caption'])}>
            {caption}
        </p>
    </div>
)
