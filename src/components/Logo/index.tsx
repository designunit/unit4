import * as React from 'react'

import Svg from './logo-unit4.svg'

export interface ILogoProps {
    href: string
}

export const Logo: React.SFC<ILogoProps> = props => (
    <a href={props.href} title={'logo'}>
        <style jsx>{`
            a {
                display: block;

                width: 180px;

                position: relative;
                top: -6px;
                //left: -12px;
            }
        `}</style>

        <Svg/>
    </a>
)
