import classNames from 'classnames'
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
    style?: React.CSSProperties
    smallLabel?: boolean
    mode: 'partners' | 'projects'
}

export const Gallery: React.FC<IGallery> = ({ smallLabel = false, mode, ...props }) => {
    const isModeProjects = mode === 'projects'
    return (
        <div
            className={classNames(s.gallery, isModeProjects && s.gridPropjects)}
            style={{
                ...props.style,
            }}
        >
            {props.children}
        </div>
    )
}
