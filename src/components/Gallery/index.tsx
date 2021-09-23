import * as React from 'react'

import { resizeImage } from '../../lib/image'
import { GalleryItem } from './GalleryItem'

export interface IGalleryItem {
    src: string
    alt?: string
    href?: string
    text?: string | React.ReactNode
    mode: 'partners' | 'projects'
}

export interface IGallery {
    items: IGalleryItem[]
    style?: React.CSSProperties
    minCellSize?: number
    smallLabel?: boolean
    gridGap?: number
    mode: 'partners' | 'projects'
}

export const Gallery: React.FC<IGallery> = ({ gridGap = 10, minCellSize = 200, smallLabel = false, mode, ...props }) => {
    const isModeProjects = mode === 'projects'
    return (
        <div
            className={'gallery'}
            style={props.style}
        >
            <style jsx>{`
                .wide4 {
                    grid-area: wide4;
                }
                .wide2 {
                    grid-area: wide2;
                }
                .wide1 {
                    grid-area: wide1;
                }
                
                .gallery {
                    --cell-size-min: ${minCellSize}px;
                    --grid-gap: ${gridGap}px;
    
                    display: grid;
                    grid-template-columns: ${isModeProjects ? 'repeat(4, 1fr)' : 'repeat(auto-fill, minmax(var(--cell-size-min), 1fr))'};
                    grid-auto-rows: ${isModeProjects ? '350px' : '1fr'};
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
                        --grid-gap: 8px;
                        padding: 0 8px;
                    }
                }
            `}</style>

            {props.items.map((x, i) => (
                <GalleryItem
                    key={x.src}
                    src={resizeImage(x.src, { w: 600, h: 600 })}
                    text={x.text}
                    alt={x.alt}
                    href={x.href}
                    smallLabel={smallLabel}
                    mode={mode}
                    index={i}
                />
            ))}
        </div>
    )
}
