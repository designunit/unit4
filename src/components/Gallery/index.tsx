import * as React from 'react'

import { resizeImage } from '../../lib/image'
import { GalleryItem } from './GalleryItem'

export interface IGalleryItem {
    src: string
    alt?: string
    href?: string
    text?: string | React.ReactNode
}

export interface IGallery {
    items: IGalleryItem[]
    style?: React.CSSProperties
    minCellSize?: number
    smallLabel?: boolean
    gridGap?: number
}

export const Gallery: React.FC<IGallery> = ({ gridGap = 10, minCellSize = 200, smallLabel = false, ...props }) => (
    <div
        className={'gallery'}
        style={props.style}
    >
        <style jsx>{`
            .gallery {
                --cell-size-min: ${minCellSize}px;
                --grid-gap: ${gridGap}px;

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
                src={resizeImage(x.src, { w: 600, h: 600 })}
                text={x.text}
                alt={x.alt}
                href={x.href}
                smallLabel={smallLabel}
            />
        ))}
    </div>
)
