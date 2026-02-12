'use client'

import { MenuItem } from './MenuItem'
import type { MenuItemProps } from './MenuItem'
import { Burger } from './Burger'
import { MAILTO, TEL, TELEPHONE } from '@/constants'

import s from './menu.module.css'
import { useState } from 'react'

export type MenuProps = {
    items: MenuItemProps[]
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
            {items.map((x) => (
                <MenuItem
                    key={x.href}
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
                {items.map((x) => (
                    <MenuItem
                        key={x.href}
                        {...x}
                        onClick={() => {
                            setMobileOpen(false)
                        }}
                    />
                ))}
            </menu>

            <div className={s.links}>
                <a
                    href={TEL}
                    target={'_blank'} rel="noreferrer"
                >
                    {TELEPHONE}
                </a>
                <a
                    href={MAILTO}
                    target={'_blank'} rel="noreferrer"
                >
                    inbox@unit4.io
                </a>
            </div>
        </Burger>
    )
}
