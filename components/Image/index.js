import react from 'react'
import './styles.less'

export default ({ src, alt }) => (
    <div className='image'>
        <img src={src} alt={alt} />
    </div>
)
