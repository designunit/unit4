import cx from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import s from './GalleryItem.module.css'
import Image from 'next/image'
import { Tags } from './Tags'
import { CardSize } from '@/types'

const sizeClassNameMap: Record<CardSize, string> = {
    1: s.col1,
    2: s.col2,
    4: s.col4,
}

export type GalleryItemProps = {
    src: string
    alt?: string
    href: string
    title: string | React.ReactNode
    tags?: string[]
    size: CardSize
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ href, size, tags, title, ...props }) => {
    return (
        <Link href={href}>
            <a className={cx(s.container, sizeClassNameMap[size])}>
                <div
                    className={s.image}
                >
                    <Image
                        src={props.src}
                        alt={props.alt}
                        layout='fill'
                        objectFit='cover'
                        className={s.img}
                    />
                </div>
                <div className={s.label}>
                    <span>
                        <span>
                            {title}
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
