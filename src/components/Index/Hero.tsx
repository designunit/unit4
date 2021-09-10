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
                width: 600,
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
        <Loud mode='multiline'>
            <div>
                Cоздаем
            </div>
            <div style={{ paddingLeft: '30%' }}>
                добавленное качество
            </div>
            <div style={{ paddingLeft: '10%' }}>
                материального окружения
            </div>
        </Loud>
    </div>
)