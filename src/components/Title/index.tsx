import * as React from 'react'
import s from './index.module.css'
import Head from 'next/head'
import cx from 'classnames'

export interface ITitleProps {
    caption?: string
    mode?: null | 'multiline'
    crossed?: boolean
}

export const Title: React.FC<ITitleProps> = ({ caption, children, mode, crossed = false }) => (
    <div className={s.title}>
        {!(mode || crossed) && (
            <Head>
                <title>{children}</title>
            </Head>
        )}

        <h1 className={cx(s.h1, mode == 'multiline' && s.multiline, crossed && s.crossed)}>
            {children}
        </h1>

        <p className={cx(s['title-caption'], mode == 'multiline' && s.multilineCaption)}>
            {caption}
        </p>
    </div>
)
