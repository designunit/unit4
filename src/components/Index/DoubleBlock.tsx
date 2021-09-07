import s from './doubleBlock.module.css'

export const DoubleBlock = ({ left, right, ...props }) => {
    return (
        <div
            className={s.container}
        >
            <div style={{
                alignSelf: 'flex-start',
                display: 'flex',
                flexFlow: 'column',
            }}>
                {left.map(x => (
                    <div>
                        {x}
                    </div>
                ))}
            </div>
            <div style={{
                marginTop: '1rem',
                marginLeft: 'auto',
                display: 'flex',
                alignSelf: 'flex-end',
            }}>
                <div
                    className={s.emptyLeft}
                style={{
                    flex: '1 0 33%',
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