import * as React from 'react'
import Svg from 'react-inlinesvg'

export interface IPartnerProps {
    href: string
    title: string
    src: string
    imageWidth?: number | string
}

export const Partner: React.FC<IPartnerProps> = ({ href, title, src, ...props }) => (
    <div className={'partner'}>
        <style jsx>{`
            .partner {
                margin-bottom: var(--margin-m);
            }

            a {
                margin-bottom: var(--margin-s);
                display: block;
            }
        `}</style>

        <a href={href} target={'_blank'} title={title} rel="noreferrer">
            <Svg
                className={'partner-logo'}
                style={{
                    width: props.imageWidth,
                }}
                src={src}
            />
        </a>

        {props.children}
    </div>
)
