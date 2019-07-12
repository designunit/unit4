import * as React from 'react'
import './styles.less'

export interface IGalleryItem {
    src: string
    alt: string
    href?: string
    text?: string
}

export interface IGallery {
    items: IGalleryItem[]
    theme: 'default' | 'interactive'
}

const GalleryItem: React.FC<IGalleryItem> = ({ src, alt }) => (
    <div className="gallery-item">
        <img src={src} />
    </div>
)

const InteractiveGalleryItem: React.FC<IGalleryItem> = ({ src, href, text }) => (
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

export const Gallery: React.FC<IGallery> = ({ items, theme = 'default' }) => {
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
