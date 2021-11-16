import cx from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import { IGalleryItem } from '.'
import s from './GalleryItem.module.css'
import Ratio from 'react-ratio'

export interface IGalleryItemProps extends IGalleryItem {
    smallLabel: boolean
    size?: 1 | 2 | 4
}

type ContainerProps = Partial<{
    href: string,
    className?: string
}>

const sizeClassNmaeMap = {
    1: s.col1,
    2: s.col2,
    4: s.col4,
}

const Container: React.FC<ContainerProps> = ({ href, className, children }) => (
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

export const GalleryItem: React.FC<IGalleryItemProps> = ({ href, src, smallLabel, text, mode, size, ...props }) => {
    const isModePartners = mode === 'partners'
    const isModeProjects = mode === 'projects'

    return (
        <Container
            href={href}
            className={isModeProjects && cx(s.border, s.hoverZoom, sizeClassNmaeMap[size])}
        >
            <div
                className={cx(isModePartners && s.border)}
            >
                {isModeProjects && (
                    <img
                        src={src}
                        className={s.img}
                    />
                )}
                {isModePartners && (
                    <Ratio
                        contentClassName={cx(s.img, isModePartners && s.gray)}
                    >
                        <img
                            src={src}
                            style={{
                                objectFit: 'contain',
                                padding: 10,
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Ratio>
                )}
            </div>
            {isModeProjects && (
                <div className={cx(s.label, {
                    small: smallLabel,
                })}>
                    {text}
                </div>
            )}
        </Container>
    )
}
