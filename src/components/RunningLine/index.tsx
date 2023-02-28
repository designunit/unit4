import s from './runningLine.module.css'

export type RunningLineProps = {
    children: React.ReactNode
    style?: React.CSSProperties,
    direction?: 'left' | 'right',
    animationDuration?: string,
}

export const RunningLine: React.FC<RunningLineProps> = ({ children, style, direction = 'left', animationDuration = '20s' }) => {
    return (
        <div
            className={`${s.container} ${direction == 'left' ? s.left : s.right}`}
            style={style}
        >
            <span style={{ animationDuration }}>
                {children}
            </span>
            <span style={{ animationDuration }}>
                {children}
            </span>
        </div >
    )
}
