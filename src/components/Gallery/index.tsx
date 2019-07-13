import * as React from 'react'

export interface IGalleryItem {
    src: string
    alt: string
    href?: string
    text?: string
}

export interface IGallery {
    items: IGalleryItem[]
    style?: React.CSSProperties
}

const GalleryItem: React.FC<IGalleryItem> = props => (
    <a
        className={'image'}
        href={props.href}
    >
        <style jsx>{`
            a {
                display: block;
            }

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;

                filter: sepia(100%) hue-rotate(260deg);
                filter: grayscale(100%); 
            }

            .image {
                position: relative;
            }

            .image-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            
                opacity: 0.9;
                transition: .5s ease;
                
                background-color: rgba(255, 0, 102, .7);

                display: flex;
                justify-content: center;
                align-items: center;
            }

            .image-overlay:hover {
                opacity: 1;
            }

            .gallery-item--text {
                font-family: var(--font-normal-family);

                color: white;
                font-size: 1.2em;
                text-align: center;
                padding: 5px;
            }
        `}</style>

        <img
            src={props.src}
        />

        <div className="image-overlay">
            <div className="gallery-item--text">
                {props.text}
            </div>
        </div>
    </a>
)

export const Gallery: React.FC<IGallery> = props => (
    <div
        className={'gallery'}
        style={props.style}
    >
        <style jsx>{`
                .gallery {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    grid-auto-rows: 1fr;
                    grid-gap: 10px;
                }

                .gallery > *:first-child {
                    grid-row: 1 / 1;
                    grid-column: 1 / 1;
                }

                @media screen and (max-width: 31.25em) {
                    .gallery {
                        --item-right-margin: 0;
                    }
                }
            `}</style>

        {props.items.map(x => (
            <GalleryItem
                key={x.src}
                src={x.src}
                text={x.text}
                alt={x.alt}
                href={x.href}
            />
        ))}
    </div>
)
