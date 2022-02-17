import cx from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import s from './GalleryItem.module.css'
import Ratio from 'react-ratio'
import Image from 'next/image'

export interface IGalleryItemProps {
    src: string
    alt?: string
    href?: string
    text?: string | React.ReactNode
    mode: 'partners' | 'projects'
    tags?: string[]
    size?: 1 | 2 | 4
    relativeSrc?: boolean
}

type ContainerProps = Partial<{
    href: string,
    className?: string
}>

const sizeClassNameMap = {
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

export const GalleryItem: React.FC<IGalleryItemProps> = ({ href, size, mode, tags, text, ...props }) => {
    const isModePartners = mode === 'partners'
    const isModeProjects = mode === 'projects'

    const src = !props.src ? '/static/logo_unit4.jpg' : // in ENG props.src is null
        props.relativeSrc ? props.src.split('https://unit4.io')[1] : props.src
    return (
        <Container
            href={href}
            className={isModeProjects && cx(s.border, s.hoverZoom, sizeClassNameMap[size])}
        >
            <div
                className={cx(s.image, isModePartners && s.border)}
            >
                {isModeProjects && (
                    <Image
                        src={src}
                        layout='fill'
                        objectFit='cover'
                        className={s.img}
                    />
                )}
                {isModePartners && (
                    <Ratio
                        contentClassName={cx(s.img)} // isModePartners && s.gray
                    >
                        <Image
                            src={src}
                            layout='fill'
                            objectFit='contain'
                            className={s.img}
                        />
                    </Ratio>
                )}
            </div>
            {isModeProjects && (
                <div className={cx(s.label)}>
                    <span>
                        {text}
                    </span>
                    <div className={s.tags}>
                        {tags.map((x, i) => <span key={i}>{x}</span>)}
                    </div>
                </div>
            )}
        </Container>
    )
}
