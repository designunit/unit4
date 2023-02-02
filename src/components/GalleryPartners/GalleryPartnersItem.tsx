import Link from 'next/link'
import * as React from 'react'
import s from './GalleryPartnersItem.module.css'
import Ratio from 'react-ratio'
import Image from 'next/image'

export interface IGalleryItemProps {
    src: string
    alt?: string
    href?: string
}

export const GalleryPartnersItem: React.FC<IGalleryItemProps> = ({ href, src, ...props }) => (
    <Link href={href}>
        <a className={s.container}>
            <Ratio>
                <Image
                    src={src}
                    alt={''}
                    layout='fill'
                    objectFit='contain'
                />
            </Ratio>
        </a>
    </Link>
)
