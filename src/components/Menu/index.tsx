import className from 'classnames'
import * as React from 'react'
import { IMenuItemProps, MenuItem } from './MenuItem'

export interface IMenuProps {
    items: IMenuItemProps[]
    vertical?: boolean
}

export const Menu: React.FC<IMenuProps> = ({ items, vertical= false }) => (
    <menu className={className({
        vertical,
    })}>
        <style jsx>{`
            menu {
                text-align: right;
                list-style: none;
                margin: 0;
                padding: 0;

                background-color: var(--color-background);

                position: relative;
                top: -10px;
                left: 10px;

                display: flex;
                flex-direction: row;
            }

            menu.vertical {
                flex-direction: column;
            }
        `}</style>

        {items.map((x, i) => (
            <MenuItem
                key={i}
                {...x}
            />
        ))}
    </menu>
)
