import cx from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import { IGalleryItem } from '.'
import s from './GalleryItem.module.css'
import Ratio from 'react-ratio'

export interface IGalleryItemProps extends IGalleryItem {
    smallLabel: boolean
    index?: number
}

type ContainerProps = Partial<{
    href: string,
    className?: string
}>

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

export const GalleryItem: React.FC<IGalleryItemProps> = ({ href, src, smallLabel, text, tags, mode, index, ...props }) => {
    const getClassByIndex = React.useCallback(() => {
        const indexCycled = index % 6 // Math.floor(Math.random()* 7) 
        switch (indexCycled) {
            case 0:
                return s.col4

            case 1:
            case 2:
                return s.col1

            case 3:
            case 4:
            case 5:
                return s.col2

            default:
                return null
        }
    }, [index])

    const isModePartners = mode === 'partners'
    const isModeProjects = mode === 'projects'

    return (
        <Container
            href={href}
            className={isModeProjects && cx(s.border, s.hoverZoom, getClassByIndex())}
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
                    <div className={s.tags}>
                        {tags.map(x => <span>{x}</span>)}
                    </div>
                </div>
            )}
        </Container>
    )
}
