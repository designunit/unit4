import * as React from 'react'
import s from './index.module.css'
import Head from 'next/head'
import cx from 'classnames'

export interface ITitleProps {
    caption?: string
    multiline?: boolean
}

export const Title: React.FC<ITitleProps> = ({ caption, children, multiline = false }) => (
    <div className={s.title}>
        <Head>
            {!multiline && (
                <title>{children}</title>
            )}
        </Head>

        <h1 className={cx(s.h1, multiline && s.multiline)}>
            {children}
        </h1>

        <p className={cx(s['title-caption'])}>
            {caption}
        </p>
    </div>
)
