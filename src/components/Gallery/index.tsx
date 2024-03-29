import s from './index.module.css'

export type GalleryProps = {
    children: React.ReactNode
    style?: React.CSSProperties
}

export const Gallery: React.FC<GalleryProps> = props => {
    return (
        <div
            className={s.gallery}
            style={{
                ...props.style,
            }}
        >
            {props.children}
        </div>
    )
}
