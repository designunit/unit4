import classNames from 'classnames'
import * as React from 'react'
import s from './index.module.css'

export interface IGalleryItem {
    src: string
    alt?: string
    href?: string
    text?: string | React.ReactNode
    mode: 'partners' | 'projects'
    tags?: string[]
}

export interface IGallery {
    style?: React.CSSProperties
    mode: 'partners' | 'projects'
}

export const Gallery: React.FC<IGallery> = ({ mode, ...props }) => {
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
