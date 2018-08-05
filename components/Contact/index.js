import react from 'react'

import './styles.less'

export default ({href, children, mix}) => (
    <span className={`contact ${mix}`}>
        <a href={href}>
            {children}
        </a>
    </span>
)
