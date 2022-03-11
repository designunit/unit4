import cx from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import s from './GalleryItem.module.css'
import Image from 'next/image'
import { Tags } from './Tags'

const sizeClassNameMap = {
    1: s.col1,
    2: s.col2,
    4: s.col4,
}

export type GalleryItemProps = {
    src: string
    alt?: string
    href?: string
    text?: string | React.ReactNode
    tags?: string[]
    size?: 1 | 2 | 4
    relativeSrc?: boolean
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ href, size, tags, text, ...props }) => {
    const src = !props.src ? '/static/logo_unit4.jpg' : // in ENG props.src is null
        props.relativeSrc ? props.src.split('https://unit4.io')[1] : props.src

    return (
        <Link href={href}>
            <a className={cx(s.container, sizeClassNameMap[size])}>
                <div
                    className={s.image}
                >
                    <Image
                        src={src}
                        layout='fill'
                        objectFit='cover'
                        className={s.img}
                    />
                </div>
                <div className={s.label}>
                    <span>
                        <span>
                            {text}
                        </span>
                    </span>
                    {!tags ? null : (
                        <Tags
                            items={tags}
                        />
                    )}
                </div>
            </a>
        </Link>
    )
}
