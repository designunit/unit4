import react from 'react'

import './styles.less'

export default ({children}) => (
    <div className="row">
        <div className="column">
          {children}  
        </div>
    </div>
)