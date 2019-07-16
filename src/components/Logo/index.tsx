import * as React from 'react'

import Svg from './icon.svg'

export interface ILogoProps {
    href: string
}

export const Logo: React.SFC<ILogoProps> = props => (
    <a href={props.href} title={'logo'}>
        <style jsx>{`
            a {
                display: block;

                width: 35px;
                height: 35px;

                position: relative;
                top: -5px;
                left: -5px;

                fill: var(--color-text);
                background-color: var(--color-background);
                padding: 5px;
            }
        `}</style>

        <Svg/>
    </a>
)
