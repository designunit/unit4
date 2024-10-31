import { useTranslation } from 'react-i18next'

import { LinkActive } from '../LinkActive'

export interface IMenuItemProps {
    href: string
    text: string
    onClick?: () => void
}

export const MenuItem: React.FC<IMenuItemProps> = ({ href, text, onClick }) => {
    // const { t } = useTranslation('menu')

    return (
        <li>
            <style jsx>{`
            li {
                margin: 0;
                margin-top: 2px;
            }

            li a {
                color: var(--color-text);
                text-decoration: none;
            }

            li a:hover {
                color: var(--link-color-active);
            }

            li a:active {
                color: var(--link-color-active);
            }

            .link-body {
                font-family: var(--font-second-family);
                font-size: var(--font-second-size);
                padding: 3px 10px;
            }

            .link-body.active {
                background-color: var(--color-background-opposite);
                color: var(--color-text-opposite);
            }

            @media screen and (max-width: 31.25em) {
                li > :is(a, span) {
                    font-size: 36px;
                    color: var(--color-text-opposite);
                    text-transform: uppercase;
                }
                .active {
                    text-decoration: underline;
                    text-decoration-color: var(--color-text-opposite);
                }
            }
        `}</style>
            <LinkActive href={href} passHref legacyBehavior={true}>
                {active => active
                    ? (
                        <span className='link-body active'
                            onClick={onClick}
                        >
                            {text}
                        </span>
                    ) : (
                        <a className='link-body'
                            onClick={onClick}
                        >
                            {text}
                        </a>
                    )
                }
            </LinkActive>
        </li>
    )
}
