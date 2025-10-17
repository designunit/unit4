import s from './item.module.css'
import Image from 'next/image'

export const Item: React.FC<{ src: string }> = ({ src }) => (
    <div className={s.item}>
        <Image
            src={src}
            alt={''}
            fill
            style={{
                objectFit: 'contain',
            }}
        />
    </div>
)
