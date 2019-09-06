import * as React from 'react'

export interface IUnitHighlightProps {
    style?: React.CSSProperties
    newWindow?: boolean
    items: Array<{
        date?: Date,
        href: string,
        title: string,
    }>
}

export const UnitHighlight: React.FC<IUnitHighlightProps> = ({ newWindow = false, ...props }) => {
    const dateFormatterRef = React.useRef(new Intl.DateTimeFormat('ru-RU'))

    return (
        <section style={props.style}>
            <style jsx>{`
                ul {
                    padding-left: 0;
                }

                li {
                    display: flex;
                }

                .date {
                    padding-right: 1em;
                }

                .link {
                    flex: 1;
                }

                a:link, a:visited {
                    background-color:  #ff0066;
                    color: white;
                    text-decoration: none;
                    padding: 0 8px;
                }

                a:hover, a:active {
                    background-color: black;
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
                                target={newWindow ? '_blank' : null}
                            >
                                {x.title}
                            </a>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
