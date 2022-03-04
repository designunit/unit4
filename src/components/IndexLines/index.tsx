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
            {lines.map((line, index) => {
                const direction = [0, 2].includes(index) ? 'left' : 'right'
                let animationDuration = '20s'
                let top = '5rem'
                switch (index) {
                    case 1:
                        animationDuration = '60s'
                        top = '8rem'
                        break;
                    case 2:
                        animationDuration = '35s'
                        top = '11rem'
                        break;
                    case 3:
                        animationDuration = '25s'
                        top = '14rem'
                        break;
                    default:
                        break;
                }
                return (
                    <RunningLine
                        key={index}
                        direction={direction}
                        animationDuration={animationDuration}
                        style={{
                            border: 'none',
                            padding: 0,
                            top,
                            overflow: 'visible',
                        }}
                    >
                        {line.map((x, i) => (
                            <Line line={x} key={i} />
                        ))}
                    </RunningLine>
                )
            })}
        </div>
    )
}