import { useEffect } from 'react'
import s from './menu.module.css'
import Image from 'next/image'

export type BurgerProps = {
    open: boolean
    onClick: () => void
    children: React.ReactNode
}

export const Burger: React.FC<BurgerProps> = ({ children, open, onClick }) => {
    useEffect(() => {
        if (!document) {
            return
        }
        const start = document.body.style.touchAction
        document.body.style.touchAction = open ? 'none' : 'auto'
        return () => {
            document.body.style.touchAction = start
        }
    }, [open])

    return (
        <>
            <button className={s.burger} onClick={onClick}>
                {open ? (
                    <Image
                        src={'/static/closeMenu.svg'}
                        width={33}
                        height={33}
                        alt={''}
                        style={{
                            filter: 'invert(1)',
                            outline: 'none',
                            padding: 4,
                        }}
                    />
                ) : (
                    <Image
                        src={'/static/menu.svg'}
                        width={33}
                        height={33}
                        alt={''}
                        style={{
                            outline: 'none',
                            padding: 4,
                        }}
                    />
                )}
            </button>

            <div className={s.overlay}
                style={{
                    left: open ? 0 : 'calc(100vw + 52px)',
                }}
            >
                {children}
            </div>
        </>
    )
}
