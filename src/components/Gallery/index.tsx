import * as React from 'react'
import { resizeImage } from '../../lib/image'
import { GalleryItem } from './GalleryItem'
import s from './index.module.css'

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
    smallLabel?: boolean
    mode: 'partners' | 'projects'
}

export const Gallery: React.FC<IGallery> = ({ smallLabel = false, mode, ...props }) => {
    const isModeProjects = mode === 'projects'
    return (
        <div
            className={s.gallery}
            style={{
                ...props.style,
                gridTemplateColumns: isModeProjects ? 'repeat(4, 1fr)' : 'repeat(auto-fill, minmax(var(--cell-size-min), 1fr))',
                gridAutoRows: isModeProjects ? '500px 350px 350px' : '1fr',
            }}
        >
            {props.items.map((x, i) => {
                var size
                switch (i % 6) {
                    case 0:
                        size = 4
                        break

                    case 1:
                    case 2:
                        size = 1
                        break

                    case 3:
                    case 4:
                    case 5:
                        size = 2
                        break

                    default:
                        size = 1
                        break
                }
                return (
                    <GalleryItem
                        key={x.src}
                        src={resizeImage(x.src, { w: 600, h: 600 })}
                        text={x.text}
                        alt={x.alt}
                        href={x.href}
                        smallLabel={smallLabel}
                        mode={mode}
                        size={size}
                    />
                )
            })}
        </div>
    )
}
