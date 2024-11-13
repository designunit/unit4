import { useEffect } from 'react'
import s from './menu.module.css'
import Icon from '@mdi/react'
import { mdiDragHorizontalVariant, mdiClose } from '@mdi/js'

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
                    <Icon
                        path={mdiClose}
                        className={s.cross}
                    />
                ) : (
                    <Icon
                        path={mdiDragHorizontalVariant}
                        style={{
                            fill: 'var(--color-background-opposite)',
                        }}
                    />
                )}
            </button>

            <div className={s.mobileMenuContainer}
                style={{
                    left: open ? 0 : '100vw',
                }}
            >
                {children}
            </div>
        </>
    )
}
