import cx from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import { IGalleryItem } from '.'
import s from './GalleryItem.module.css'

export interface IGalleryItemProps extends IGalleryItem {
    smallLabel: boolean
    index?: number
}

const ImageContainer: React.FC<Partial<{ href: string, className?: string }>> = ({ href, className, children }) => (
    <>
        {href ? (
            <Link href={href}>
                <a className={cx(s.container, className)}>
                    {children}
                </a>
            </Link>
        ) : (
            <div className={cx(s.container, className)}>
                {children}
            </div>
        )}
    </>
)

export const GalleryItem: React.FC<IGalleryItemProps> = ({ href, src, smallLabel, text, mode, index, ...props }) => {
    const getClassByIndex = () => {
        const indexCycled = index % 6
        switch (indexCycled) {
            case 0:
                return s.col4
            case 3:
            case 4:
            case 5:
                return s.col2
            case 2:
            case 1:
                return s.col1
            default:
                return null
        }
    }

    return (
        <ImageContainer
            href={href}
            className={cx(mode == 'projects' && s.border, mode == 'projects' && getClassByIndex())}
        >
            <div
                className={cx(mode == 'partners' && s.border)}
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
            <div className={cx(s.label, {
                small: smallLabel,
            })}>
                {text}
            </div>
        </ImageContainer>
    )
}
