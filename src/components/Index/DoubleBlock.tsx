import s from './doubleBlock.module.css'

export const DoubleBlock = ({ left, right, ...props }) => {
    return (
        <div
            className={s.container}
        >
            <ul style={{
                alignSelf: 'flex-start',
                display: 'flex',
                flexFlow: 'column',
            }}>
                {left.map((x,i) => (
                    <li key={i}>
                        {x}
                    </li>
                ))}
            </ul>
            <div style={{
                marginTop: '1rem',
                marginLeft: 'auto',
                display: 'flex',
                alignSelf: 'flex-end',
            }}>
                <div
                    className={s.emptyLeft}
                    style={{
                        width: '100%',
                        flex: '1 0 calc(33% + 8px)',
                    }} />

                <div style={{
                    marginLeft: 'auto',
                    display: 'flex',
                    flexFlow: 'column',
                }}>
                    {right}
                </div>
            </div>
        </div>
    )
}
