import react from 'react'
import Head from 'next/head'

import './styles.less'

export default ({caption, children}) => (
    <div className="title">
        <Head>
            <title>{children}</title>
        </Head>

        <h1>
            {children}
        </h1>
        <p className="title-caption">{caption}</p>
    </div>
)