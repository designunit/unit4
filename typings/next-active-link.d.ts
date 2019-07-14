declare module 'next-link-active' {
    import * as React from 'react'

    interface ILinkActiveProps {
        children(active: boolean): React.ReactNode
        href: string
        passHref: boolean
    }

    const LinkActive: React.SFC<ILinkActiveProps>
    export default LinkActive
}
