import * as React from 'react'
import Media from 'react-media'

export interface IWideBlockProps {
    mobile: React.ReactNode
}

export const MobileFallback: React.FC<IWideBlockProps> = props => (
    <Media query={'screen and (max-width: 31.25em)'}>
        {match => match
            ? props.mobile
            : props.children
        }
    </Media>
)
