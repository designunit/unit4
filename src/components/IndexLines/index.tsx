import React from 'react'
import { RunningLine } from '@/components/RunningLine'

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
                let animationDuration = '20s'
                let top = '5rem'
                switch (index) {
                    case 1:
                        animationDuration = '25s'
                        top = '8rem'
                        break;
                    case 2:
                        animationDuration = '25s'
                        top = '11rem'
                        break;
                    case 3:
                        animationDuration = '17s'
                        top = '14rem'
                        break;
                    default:
                        break;
                }
                return (
                    <RunningLine
                        key={index}
                        direction={[0, 2].includes(index) ? 'left' : 'right'}
                        style={{
                            border: 'none',
                            // border: 'solid 1px red',
                            padding: 0,
                            top,
                            overflow: 'visible',
                        }}
                    >
                        <span
                            style={{
                                animationDuration,
                            }}
                        >
                            {line.map(x => (
                                <>
                                    <span
                                        style={{
                                            textTransform: x == 'design : : unit' ? 'lowercase' : 'uppercase',
                                            fontWeight: 'bold',
                                            fontSize: 42,
                                            color: x == 'design : : unit' ? 'black' : 'lightgray',
                                            marginRight: '1rem',
                                        }}
                                    >
                                        {x}
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
                                </>
                            ))}
                        </span>
                    </RunningLine>
                )
            })}
        </div>
    )
}