import * as React from 'react'

export interface PartnerProps {
    href: string
    title: string
    src: string
    imageHeight: number | string
}

export const Partner: React.FC<PartnerProps> = ({ href, title, src, ...props }) => (
    <div className={'partner'}>
        <style jsx>{`
            .partner {
                margin-bottom: 5em;
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
