'use client'

import { MenuItem } from './MenuItem'
import type { IMenuItemProps } from './MenuItem'
import {useMediaQuery} from 'react-responsive'
import { Burger } from './Burger'

import s from './menu.module.css'
import { useState } from 'react'

export type MenuProps = {
    items: IMenuItemProps[]
}

export const Menu: React.FC<MenuProps> = ({ items }) => {
    const burger = useMediaQuery({ query: 'only screen and (max-width: 700px)' })
    if (burger) {
        return (
            <Mob items={items}/>
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

export const Mob: React.FC<MenuProps> = ({ items }) => {
    const [open, setMobileOpen] = useState(false)

    return (
        <Burger open={open} onClick={() => {
            setMobileOpen(!open)
        }}>
            <menu className={`${s.menu} ${s.vertical}`}>
                {items.map((x, i) => (
                    <MenuItem
                        key={i}
                        {...x}
                        onClick={() => {
                            setMobileOpen(false)
                        }}
                    />
                ))}

                <div className={s.contacts}>
                    <div className={s.icons}>
                    </div>
                    <div className={s.links} >
                        <a
                            href='mailto:inbox@unit4.io'
                            target={'_blank'} rel="noreferrer"
                        >
                            inbox@unit4.io
                        </a>
                        <a
                            href='tel:+79219980303'
                            target={'_blank'} rel="noreferrer"
                        >
                            +7 921 9980303
                        </a>
                    </div>
                </div>
            </menu>
        </Burger>
    )
}
