import * as React from 'react'

import Svg from './logo-unit4.svg'

export type LogoProps = {
    href: string
    invert?: boolean
}

export const Logo: React.FC<LogoProps> = props => (
    <a href={props.href} title={'logo'}>
        <style jsx>{`
            a {
                display: block;

                width: 180px;
                height: 36px;

                position: relative;
                z-index: 1;
                ${props.invert && 'filter: invert(1);'}
                transition: filter .5s ease;
            }
        `}</style>

        <Svg />
    </a>
)
