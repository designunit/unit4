import * as React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = props => {
    return (
        <button
            onClick={props.onClick}
            onMouseDown={event => {
                event.preventDefault()
            }}
        >
            <style jsx>{`
                button {
                    cursor: pointer;
                    min-width: 200px;
                    background-color: var(--link-color-default);
                    color: white;
                    padding: 0px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    border: 4px solid var(--link-color-default);

                    outline: 0;
                }

                button:hover {
                    background-color: var(--link-color-active-light);
                    border-color: var(--link-color-active-light);
                }

                button:focus {
                    border-color: rgb(102, 0, 255);
                }

                button:disabled {
                    background-color: var(--link-color-inactive);
                    border-color: var(--link-color-inactive);
                }
            `}</style>

            {props.children}
        </button>
    )
}
