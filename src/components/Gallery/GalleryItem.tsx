import className from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import { IGalleryItem } from '.'
import s from './GalleryItem.module.css'

export interface IGalleryItemProps extends IGalleryItem {
    smallLabel: boolean
    border?: boolean
    imgStyle?: React.CSSProperties
}

const ImageContainer: React.FC<Partial<IGalleryItemProps>> = ({ href, border, children }) => (
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

export const GalleryItem: React.FC<IGalleryItemProps> = ({ href, src, smallLabel, text, border = false, imgStyle, ...props }) => (
    <ImageContainer
        href={href}
        border={border}
    >
        <div
            className={border && s.border}
        >
            <img
                className={s.img}
                src={src}
                style={imgStyle}
            />
        </div>
        <div className={className(s.label, {
            small: smallLabel,
        })}>
            {text}
        </div>
    </ImageContainer>
)
