import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

type Props = LinkProps & {
    children: (active: boolean) => React.ReactNode
}

export const LinkActive: React.FC<Props> = props => {
    const pathname = usePathname()
    const href = props.href || props.as

    return (
        <Link {...props}>
            {props.children(href === pathname)}
        </Link>
    )
}
