import * as React from 'react'

import './styles.less'

export const TextBlock: React.FC = ({children}) => (
    <div className='text-block'>
        {children}
    </div>
)
