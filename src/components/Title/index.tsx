import * as React from 'react'
import cx from 'classnames'

import Head from 'next/head'

export interface ITitleProps {
    caption?: string
    crossed?: boolean
}

export const Title: React.FC<ITitleProps> = ({ caption, crossed = true, children }) => (
    <div className={cx('title', crossed && 'crossed')}>
        <style jsx>{`
            .title {
                margin-bottom: 50px;
                padding: var(--content-padding);
            }

            .title-caption {
                margin: 0;

                line-height: var(--font-second-size);
            }

            .crossed {
                text-decoration-line: line-through;
                text-decoration-thickness: 1px;
            }
        `}</style>

        <Head>
            <title>{children}</title>
        </Head>

        <h1>
            {children}
        </h1>

        <p className={'title-caption'}>
            {caption}
        </p>
    </div>
)
