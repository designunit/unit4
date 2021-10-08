import s from './GalleryItemText.module.css'

type GalleryItemTextProps = {
    title: string | JSX.Element 
    text: string | JSX.Element
}

export const GalleryItemText: React.FC<GalleryItemTextProps> = ({ title, text }) => (
    <>
        <div
            className={s.title}
        >
            {title}
        </div>
        <span
            className={s.text}
        >
            {text}
        </span>
    </>
)