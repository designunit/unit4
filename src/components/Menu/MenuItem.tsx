import LinkActive from 'next-link-active'
import * as React from 'react'

export interface IMenuItemProps {
    href: string
    text: string
}

export const MenuItem: React.FC<IMenuItemProps> = ({ href, text }) => (
    <li>
        <style jsx>{`
            li {
                margin: 0;
                margin-bottom: 6px;
            }

            li a {
                color: black;
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
                background-color: black;
                color: white;
            }
        `}</style>

        <LinkActive href={href} passHref>
            {active => active
                ? (
                    <span className="link-body active">
                        {text}
                    </span>
                ) : (
                    <a className="link-body">
                        {text}
                    </a>
                )
            }
        </LinkActive>
    </li>
)
