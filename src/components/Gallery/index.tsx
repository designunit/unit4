import classNames from 'classnames'
import * as React from 'react'
import s from './index.module.css'

export interface IGallery {
    style?: React.CSSProperties
    mode: 'partners' | 'projects'
}

export const Gallery: React.FC<IGallery> = ({ mode, ...props }) => {
    const isModeProjects = mode === 'projects'
    const isModePartners = mode === 'partners'
    return (
        <div
            className={classNames(s.gallery, isModeProjects && s.gridPropjects, isModePartners && s.gridPartners)}
            style={{
                ...props.style,
            }}
        >
            {props.children}
        </div>
    )
}
