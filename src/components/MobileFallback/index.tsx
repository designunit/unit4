import Media from 'react-media'

export type MobileFallbackProps = {
    children: React.ReactNode
    mobile: React.ReactNode
}

export const MobileFallback: React.FC<MobileFallbackProps> = props => (
    <Media query={'screen and (max-width: 31.25em)'}>
        {match => match
            ? props.mobile
            : props.children
        }
    </Media>
)
