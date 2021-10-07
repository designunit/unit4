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
        <div
            className={s.mobileHidden}
            style={{
                textAlign: 'right',
                fontSize: 20,
                fontWeight: 400,
                marginBottom: 50,
            }}
        >
            проектная студия design unit 4
        </div>
        <Loud>
            Cоздаем <br />
            добавленное качество <br />
            материального окружения
        </Loud>
    </div>
)