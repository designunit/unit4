import { Line } from '@/components/IndexLines/Line'
import { RunningLine } from '@/components/RunningLine'

function Error({ statusCode }) {
    return (
        <>
            <div style={{
                height: '4rem',
                position: 'relative',
            }}>
                <RunningLine
                    direction={'left'}
                    animationDuration={'30s'}
                    style={{
                        border: 'none',
                        padding: 0,
                        top: '0rem',
                        overflow: 'visible',
                    }}
                >
                    <Line line={['ошибка', 'сломалось', 'не работает', 'баг', 'фича', 'не заводится', 'ошибка', 'упало', 'нету', 'не вышло']} />
                </RunningLine>
                <RunningLine
                    direction={'right'}
                    animationDuration={'21s'}
                    style={{
                        border: 'none',
                        padding: 0,
                        top: '4rem',
                        overflow: 'visible',
                    }}
                >
                    <Line line={Array(24).fill(`${statusCode}`)} />
                </RunningLine>
            </div>
        </>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
