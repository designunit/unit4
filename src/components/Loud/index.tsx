import s from './loud.module.css'
import cx from 'classnames'

export type LoudProps = {
    mode?: null | 'multiline'
    crossed?: boolean
}

export const Loud: React.FC<LoudProps> = ({ children, mode, crossed = false }) => (
    <div className={s.container}>
        <div className={cx(s.h1, mode == 'multiline' && s.multiline, crossed && s.crossed)}>
            {children}
        </div>
    </div>
)
