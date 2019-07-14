import * as React from 'react'
import { MenuItem, IMenuItemProps } from './MenuItem'

export interface IMenuProps {
    items: IMenuItemProps[]
}

export const Menu: React.FC<IMenuProps> = ({ items }) => (
    <menu>
        <style jsx>{`
            menu {
                text-align: right;
                list-style: none;
                margin: 0;

                background-color: white;
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