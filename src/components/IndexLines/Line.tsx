import { Fragment } from 'react'

export type LineProps = {
    line: string[]
}

// TODO: shitty
export const Line: React.FC<LineProps> = ({ line }) => (
    <>
        {line.map((line, i) => (
            <Fragment key={i}>
                <span
                    style={{
                        textTransform: line == 'design : : unit' ? 'lowercase' : 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 42,
                        color: line == 'design : : unit' ? 'black' : 'lightgray',
                        marginRight: '1rem',
                    }}
                >
                    {line}
                </span>
                <span
                    style={{
                        fontSize: 42,
                        fontWeight: 'bold',
                        color: 'lightgray',
                        marginRight: '1rem',
                    }}
                >
                    /
                </span>
            </Fragment>
        ))}
    </>
)
