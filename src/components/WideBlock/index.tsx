import s from './wide.module.css'

export type WideBlockProps = {
    children: React.ReactNode
    style?: React.CSSProperties
}

export const WideBlock: React.FC<WideBlockProps> = ({ children, style }) => (
    <div
        className={s.container}
        style={style}
    >
        {children}
    </div>
)
