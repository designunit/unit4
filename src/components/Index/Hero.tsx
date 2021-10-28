import React from 'react'
import { Loud } from '../Loud'
import s from './hero.module.css'

export const Hero = () => (
    <div
        className={s.container}
    >
        {/* <img
            src='/static/unitZalipuxa.gif'
            style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                zIndex: -1,
                width: 700,
                maxWidth: '100%',
                objectFit: 'contain',
            }}
        /> */}
        <Loud>
            проектная студия<br />
            <span
                style={{
                    textTransform: 'none'
                }}
            >
                design : : unit 4
            </span>
        </Loud>
    </div>
)