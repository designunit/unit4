'use client'

import { MenuItem } from './MenuItem'
import type { IMenuItemProps } from './MenuItem'
import { Burger } from './Burger'

import s from './menu.module.css'
import { useState } from 'react'

export type MenuProps = {
    items: IMenuItemProps[]
    mobile?: boolean
}

export const Menu: React.FC<MenuProps> = ({ items, mobile = false }) => {
    if (mobile) {
        return (
            <Mob items={items} />
        )
    }

    return (
        <menu className={`${s.menu} ${s.desktop}`}>
            {items.map((x, i) => (
                <MenuItem
                    key={i}
                    {...x}
                />
            ))}
        </menu>
    )
}

const Mob: React.FC<MenuProps> = ({ items }) => {
    const [open, setMobileOpen] = useState(false)

    return (
        <Burger open={open} onClick={() => {
            setMobileOpen(!open)
        }}>
            <menu className={`${s.menu} ${s.mobile}`}>
                {items.map((x, i) => (
                    <MenuItem
                        key={i}
                        {...x}
                        onClick={() => {
                            setMobileOpen(false)
                        }}
                    />
                ))}
            </menu>

            <div className={s.links}>
                <a
                    href='tel:+79219980303'
                    target={'_blank'} rel="noreferrer"
                >
                    +7 921 9980303
                </a>
                <a
                    href='mailto:inbox@unit4.io'
                    target={'_blank'} rel="noreferrer"
                >
                    inbox@unit4.io
                </a>
            </div>
        </Burger>
    )
}
