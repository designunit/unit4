import s from './index.module.css'

export type FlexProps = {
    children: React.ReactNode
    col?: boolean
    style?: React.CSSProperties
}

export const Flex: React.FC<FlexProps> = ({ children, col = false, style }) => {
    return (
        <div
            style={style}
            className={`${s.container} ${col ? s.col : ''}`}
        >
            {children}
        </div>
    )
}
