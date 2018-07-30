import react from 'react'

import './styles.less'

export default ({href, children, mix}) => (
    <div className={`contact ${mix}`}>
        <a href={href}>
            {children}
        </a>
    </div>
)
