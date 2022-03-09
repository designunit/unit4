import React from 'react'
import { RunningLine } from '@/components/RunningLine'
import { Line } from './Line'

const lines = [
    ['софт', 'предметный дизайн', 'дизайн-код', 'образование', 'соцкульт', 'мастерплан', 'городская среда', 'design : : unit', 'архитектура', 'исследование'],
    ['городская среда', 'исследование', 'соцкульт', 'архитектура', 'мастерплан', 'дизайн-код', 'софт', 'образование', 'предметный дизайн', 'design : : unit'],
    ['предметный дизайн', 'софт', 'design : : unit', 'городская среда', 'мастерплан', 'образование', 'дизайн-код', 'исследование', 'архитектура', 'соцкульт'],
    ['мастерплан', 'софт', 'design : : unit', 'архитектура', 'соцкульт', 'городская среда', 'предметный дизайн', 'дизайн-код', 'образование', 'исследование'],
]

export const IndexLines: React.FC = () => {
    return (
        <div style={{
            height: '14rem',
            paddingBottom: '2rem',
        }}>
            <RunningLine
                direction={'left'}
                animationDuration={'20s'}
                style={{
                    border: 'none',
                    padding: 0,
                    top: '5rem',
                    overflow: 'visible',
                }}
            >
                <Line line={lines[0]} />
            </RunningLine>
            <RunningLine
                direction={'right'}
                animationDuration={'60s'}
                style={{
                    border: 'none',
                    padding: 0,
                    top: '8rem',
                    overflow: 'visible',
                }}
            >
                <Line line={lines[1]} />
            </RunningLine>
            <RunningLine
                direction={'left'}
                animationDuration={'35s'}
                style={{
                    border: 'none',
                    padding: 0,
                    top: '11rem',
                    overflow: 'visible',
                }}
            >
                <Line line={lines[2]} />
            </RunningLine>
            <RunningLine
                direction={'right'}
                animationDuration={'25s'}
                style={{
                    border: 'none',
                    padding: 0,
                    top: '14rem',
                    overflow: 'visible',
                }}
            >
                <Line line={lines[3]} />
            </RunningLine>
        </div>
    )
}