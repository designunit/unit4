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
                // background: 'conic-gradient(from 188.75deg at 60.16% 50.19%, rgba(255, 0, 102, 0) -15.49deg, #38DEC2 28.34deg, #0047CB 91.88deg, #D0103A 181.87deg, #FF1B0D 306.52deg, rgba(255, 0, 102, 0) 344.51deg, #38DEC2 388.34deg)',
                width: 700,
                // height: 300,
                maxWidth: '100%',
                objectFit: 'contain',
            }}
        />
        <h1
            style={{
                padding: '0 16px',
                textAlign: 'right',
                fontSize: 20,
                fontWeight: 400,
            }}
        >
            Мы проектная студия design unit 4
        </h1>
        <Title
            mode='multiline'
        >
            <div>
                «Знаем силу дизайна
            </div>
            <div style={{ paddingLeft: '20%' }}>
                и щедро делимся ею»
            </div>
        </Title>
        <div
            className={s.caption}
        >
            Данияр Юсупов, основатель студии
        </div>
    </div>
)