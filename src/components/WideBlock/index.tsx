import s from './index.module.css'

export type WideBlockProps = {
    children: React.ReactNode
    style?: React.CSSProperties
}

export const WideBlock: React.FC<WideBlockProps> = props => (
    <div
        className={s.container}
        style={props.style}
    >
        {props.children}
    </div>
)
