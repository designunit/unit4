import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type Props = LinkProps & {
    children: (active: boolean) => React.ReactNode
}

export const LinkActive: React.FC<Props> = props => {
    const router = useRouter()
    const href = props.href || props.as

    return (
        <Link {...props}>
            {props.children(href === router.asPath)}
        </Link>
    )
}
