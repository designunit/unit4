import { Line } from '@/components/IndexLines/Line'
import { RunningLine } from '@/components/RunningLine'
import type { NextPage } from 'next'

const Error: NextPage<{ statusCode: number | string }> = ({ statusCode }) => {
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

export default Error
