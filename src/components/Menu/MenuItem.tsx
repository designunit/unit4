import { LinkActive } from '@/components/LinkActive'
import s from './menu.module.css'

export interface IMenuItemProps {
    href: string
    text: string
    onClick?: () => void
}

export const MenuItem: React.FC<IMenuItemProps> = ({ href, text, onClick }) => (
    <li className={s.item}>
        <LinkActive href={href} passHref legacyBehavior={true}>
            {active => active
                ? (
                    <span className={`${s.link} ${s.active}`}
                        onClick={onClick}
                    >
                        {text}
                    </span>
                ) : (
                    <a className={s.link}
                        onClick={onClick}
                    >
                        {text}
                    </a>
                )
            }
        </LinkActive>
    </li>
)
