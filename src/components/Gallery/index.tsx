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

                overflow: hidden;
            }

            a:hover img {
                transform: scale(1);
            }

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;

                filter: sepia(100%) hue-rotate(260deg);
                filter: grayscale(100%) contrast(0.75) brightness(1.25);

                transition: 0.25s ease;
                transform: scale(1);
            }

            .image {
                position: relative;
            }

            .image::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                transition: .5s ease;

                background-color: #f91b86;
                mix-blend-mode: multiply;
            }

            .label {
                z-index: 1;
                pointer-events: none;

                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                display: flex;
                justify-content: center;
                align-items: center;

                color: white;
                font-family: var(--font-normal-family);
                font-weight: bolder;
                font-size: 1.2em;
                text-align: center;

                padding: 5px;
            }

            @media screen and (max-width: 31.25em) {
                .label {
                    font-size: 1em;
                }

                img {
                    transform: scale(1.1);
                }
            }
        `}</style>

        <img
            src={props.src}
        />

        <div className='label'>
            {props.text}
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
                --cell-size-min: 200px;
                --grid-gap: 10px;

                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(var(--cell-size-min), 1fr));
                grid-auto-rows: 1fr;
                grid-gap: var(--grid-gap);
            }

            .gallery > *:first-child {
                grid-row: 1 / 1;
                grid-column: 1 / 1;
            }

            @media screen and (max-width: 31.25em) {
                .gallery {
                    --item-right-margin: 0;
                    --cell-size-min: 150px;
                    --grid-gap: 5px;
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
