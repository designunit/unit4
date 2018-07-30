import react from 'react'

import './styles.less'

export default ({caption, children}) => (
    <div className="title">
        <h1>
            {children}
        </h1>
        <p className="title-caption">{caption}</p>
    </div>
)