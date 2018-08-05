import react from 'react'
import './styles.less'

const GalleryItem = ({ src, alt }) => (
    <div className="gallery-item">
        <img src={src} />
    </div>
)

const InteractiveGalleryItem = ({ src, href, text }) => (
    <a href={href}>
        <div className="gallery-item">

            <img src={src} />
            <div className="gallery-item--overlay">
                <div className="gallery-item--text">
                    {text}
                </div>
            </div>
        </div>
    </a>
)

export default ({ items, theme = 'default' }) => {
    const Item = theme === 'default'
        ? GalleryItem
        : InteractiveGalleryItem

    return (
        <div className={`gallery gallery--theme-${theme}`}>
            {items.map((x, i) => (
                <Item
                    key={i}
                    {...x}
                />
            ))}
        </div>
    )
}
