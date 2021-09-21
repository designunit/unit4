import className from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import { IGalleryItem } from '.'
import s from './GalleryItem.module.css'

export interface IGalleryItemProps extends IGalleryItem {
    smallLabel: boolean
    mode: 'partners' | 'about'
}

const ImageContainer: React.FC<Partial<IGalleryItemProps>> = ({ href, children }) => (
    <>
        {href ? (
            <Link href={href}>
                <a className={s.container}>
                    {children}
                </a>
            </Link>
        ) : (
            <div className={s.container}>
                {children}
            </div>
        )}
    </>
)

export const GalleryItem: React.FC<IGalleryItemProps> = ({ href, src, smallLabel, text, mode, ...props }) => (
    <ImageContainer
        href={href}
    >
        <div
            className={className(mode == 'partners' && s.border)}
        >
            <img
                className={s.img}
                src={src}
                style={mode == 'partners' ? {
                    objectFit: 'contain',
                    padding: 10,
                } : {}}
            />
        </div>
        <div className={className(s.label, {
            small: smallLabel,
        })}>
            {text}
        </div>
    </ImageContainer>
)
