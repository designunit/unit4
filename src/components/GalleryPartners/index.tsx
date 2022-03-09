import s from './index.module.css'

export type GalleryProps = {
    style?: React.CSSProperties
}

export const GalleryPartners: React.FC<GalleryProps> = props => {
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
