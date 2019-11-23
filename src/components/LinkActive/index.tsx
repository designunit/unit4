import * as React from 'react'

import { WithRouterProps } from 'next/dist/client/with-router'
import Link, { LinkProps } from 'next/link'
import { withRouter } from 'next/router'

export interface ILinkActiveProps {
    children: (active: boolean) => React.ReactNode
}

type Props = LinkProps & WithRouterProps & ILinkActiveProps

export const LinkActive = withRouter((props: Props) => {
    const { router, children } = props
    const href = props.href || props.as

    return (
        <Link {...props}>
            {children(href === router.asPath)}
        </Link>
    )
})
