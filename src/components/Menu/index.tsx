import className from 'classnames'
import * as React from 'react'
import { IMenuItemProps, MenuItem } from './MenuItem'

export interface IMenuProps {
    items: IMenuItemProps[]
    vertical?: boolean
}

export const Menu: React.FC<IMenuProps> = ({ items, vertical = false }) => (
    <>
        <style jsx>{`
            menu {
                text-align: right;
                list-style: none;
                margin: 0;
                padding: 0;

                background-color: var(--color-background);

                position: relative;
                left: 10px;

                display: flex;
                flex-direction: row;
                gap: 28px;
            }

            menu.vertical {
                flex-direction: column;
            }

            .mobileButton {
                display: none;
                width: 36px;
                height: 36px;
                position: relative;
            }
            @media screen and (max-width: 31.25em) {
                .mobileButton {
                    display: block;
                }
                menu {
                    display: none;
                }
            }
        `}</style>
        <div className='mobileButton'>
            
        </div>
        <menu className={className({
            vertical,
        })}>

            {items.map((x, i) => (
                <MenuItem
                    key={i}
                    {...x}
                />
            ))}
        </menu>
    </>
)
