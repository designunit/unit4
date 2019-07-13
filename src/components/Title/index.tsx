import * as React from 'react'
import Head from 'next/head'

export interface ITitleProps {
    caption?: string
}

export const Title: React.FC<ITitleProps> = ({caption, children}) => (
    <div className={'title'}>
        <style jsx>{`
            .title {
                margin-bottom: 50px;
                padding: var(--content-padding);
            }

            .title-caption {
                margin: 0;

                line-height: var(--font-second-size);
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
