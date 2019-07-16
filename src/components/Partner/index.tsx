import * as React from 'react'

export interface IPartnerProps {
    href: string
    title: string
    src: string
    imageHeight: number | string
}

export const Partner: React.FC<IPartnerProps> = ({ href, title, src, ...props }) => (
    <div className={'partner'}>
        <style jsx>{`
            .partner {
                margin-bottom: var(--margin-m);
            }

            img {
                display: block;
                margin-bottom: var(--margin-s);
            }
        `}</style>

        <a href={href} target={'_blank'} title={title}>
            <img
                src={src}
                height={props.imageHeight}
            />
        </a>

        {props.children}
    </div>
)
