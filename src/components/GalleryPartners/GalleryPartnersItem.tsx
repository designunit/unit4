import Link from 'next/link'
import * as React from 'react'
import s from './GalleryPartnersItem.module.css'
import { AspectRatio } from 'react-aspect-ratio'
import Image from 'next/image'

export interface IGalleryItemProps {
    src: string
    alt?: string
    href: string
}

export const GalleryPartnersItem: React.FC<IGalleryItemProps> = ({ href, src, ...props }) => (
    <Link href={href}>
        <a className={s.container}>
            <AspectRatio ratio={1}>
                <Image
                    src={src}
                    alt={''}
                    layout='fill'
                    objectFit='contain'
                />
            </AspectRatio>
        </a>
    </Link>
)
