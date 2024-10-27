'use client'

import { Logo } from '@/components/Logo'
import { MenuItem } from './MenuItem'
import type { IMenuItemProps } from './MenuItem'

import s from './menu.module.css'

export type MenuProps = {
    items: IMenuItemProps[]
    vertical?: boolean
}

export const Menu: React.FC<MenuProps> = ({ items, vertical = false }) => {
    return (
        <>
            <Logo
                href={'/'}
                invert={false}
            />
            <menu className={`${s.menu} ${vertical ? s.vertical : ''}`}>
                {items.map((x, i) => (
                    <MenuItem
                        key={i}
                        {...x}
                    />
                ))}
            </menu>
        </>
    )
}
