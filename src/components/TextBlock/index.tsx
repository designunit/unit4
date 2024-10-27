import s from './text.module.css'

export type TextBlockProps = {
    children: React.ReactNode
}

export const TextBlock: React.FC<TextBlockProps> = ({ children }) => (
    <div className={s.block}>
        {children}
    </div>
)
