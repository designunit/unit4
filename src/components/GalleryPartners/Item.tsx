import s from './item.module.css'
import Image from 'next/image'

export type ItemProps = {
    src: string
    alt: string
    href: string
}

export const Item: React.FC<ItemProps> = ({ href, src, alt }) => (
    <div className={s.item}>
        <Image
            src={src}
            alt={alt}
            fill
            style={{
                objectFit: 'contain',
            }}
        />
    </div>
)
