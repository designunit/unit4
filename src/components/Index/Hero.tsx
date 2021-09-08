import React from 'react'
import { Title } from '../Title'
import s from './hero.module.css'

export const Hero = () => (
    <div
        className={s.container}
    >
        <img
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
        />
        <h1
            className={s.mobileHidden}
            style={{
                padding: '0 16px',
                textAlign: 'right',
                fontSize: 20,
                fontWeight: 400,
            }}
        >
            проектная студия design unit 4
        </h1>
        <Title
            mode='multiline'
        >
            <div>
                Cоздаем
            </div>
            <div style={{ paddingLeft: '30%' }}>
                добавленное качество
            </div>
            <div style={{ paddingLeft: '10%' }}>
                материального окружения
            </div>
        </Title>
    </div>
)