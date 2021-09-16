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
                height: 36px;

                position: relative;
                // top: -6px;
                //left: -12px;
                z-index: 1;
            }
        `}</style>

        <Svg />
    </a>
)
