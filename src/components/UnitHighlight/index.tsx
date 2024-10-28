'use client'

import { useRef } from 'react'

export type UnitHighlightProps = {
    style?: React.CSSProperties
    size?: 'default' | 'small'
    items: Array<{
        date?: Date,
        href: string,
        text: string,
        newTab?: boolean,
    }>
}

export const UnitHighlight: React.FC<UnitHighlightProps> = ({ size = 'default', ...props }) => {
    const dateFormatterRef = useRef(new Intl.DateTimeFormat('ru-RU'))
    const fontSizeRef = useRef({
        default: 'var(--font-normal-size)',
        small: 'var(--font-second-size)',
    })
    const fontSize = fontSizeRef.current[size]

    return (
        <section style={props.style}>
            <style jsx>{`
                section {
                    font-size: ${fontSize};
                }

                ul {
                    padding-left: 0;
                }

                ul li:before {
                    content: '';
                }

                li {
                    display: flex;
                    align-items: flex-start;
                }

                .date {
                    padding-right: 1em;
                }

                .link {
                    flex: 1;
                }

                a {
                    text-decoration: none;
                    padding: 0 8px;
                }

                a:link, a:visited {
                    background-color:  #ff0066;
                    color: white;
                }

                a:hover, a:active {
                    background-color: var(--color-background-opposite);
                    color: var(--color-text-opposite);
                }
            `}</style>

            <ul>
                {props.items.map(x => (
                    <li key={x.href}>
                        {!x.date ? null : (
                            <span className={'date'}>
                                {dateFormatterRef.current.format(x.date)}
                            </span>
                        )}
                        <span className={'link'}>
                            <a
                                href={x.href}
                                target={x.newTab ? '_blank' : undefined} rel="noreferrer"
                            >
                                {x.text}
                            </a>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
