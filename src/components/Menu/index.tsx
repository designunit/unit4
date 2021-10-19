import className from 'classnames'
import * as React from 'react'
import Media from 'react-media'
import { Contacts } from '../Contacts'
import { Logo } from '../Logo'
import { IMenuItemProps, MenuItem } from './MenuItem'
import s from './index.module.css'
import { Icon } from '@mdi/react'
import { mdiFacebook, mdiInstagram, mdiVimeo } from '@mdi/js'

export interface IMenuProps {
    items: IMenuItemProps[]
    vertical?: boolean
}

export const Menu: React.FC<IMenuProps> = ({ items, vertical = false }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false)
    return (
        <>
            <div onClick={() => setMobileOpen(false)}>
                <Logo
                    href={'/'}
                    invert={mobileOpen}
                />
            </div>

            <Media queries={{
                mobile: "(max-width: 31.25em)",
            }}>
                {matches => matches.mobile ? (
                    <>
                        <button className={s.mobileButton}
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: mobileOpen ? 0 : 1 }} >
                                <path d="M12 5L36 5L36 9.5L12 9.5L12 5ZM2.59078e-06 16.25L36 16.25L36 20.75L2.94047e-06 20.75L2.59078e-06 16.25ZM12 27.5L36 27.5L36 32L12 32L12 27.5Z"
                                    fill="var(--color-background-opposite)"
                                />
                            </svg>
                            <svg viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: mobileOpen ? 1 : 0 }} >
                                <path d="M0.362179 26.2739L25.818 0.818019L29 4L16.2721 16.7279L3.54416 29.4558L0.362179 26.2739Z" fill="var(--color-background)" />
                                <path d="M25.456 29.6378L0.000148177 4.18198L3.18213 1L15.91 13.7279L28.638 26.4558L25.456 29.6378Z" fill="var(--color-background)" />
                            </svg>
                        </button>

                        <div className={s.mobileMenuAnchor}>
                            <div className={s.mobileMenuContainer}
                                style={{
                                    left: mobileOpen ? 0 : '100vw',
                                }}
                            >
                                <menu className={className(s.menu, s.mobileMenu)}>
                                    {items.map((x, i) => (
                                        <MenuItem
                                            key={i}
                                            {...x}
                                            onClick={() => setMobileOpen(false)}
                                        />
                                    ))}
                                </menu>
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    width: '100%',
                                }}>
                                    <Contacts
                                        reverse
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <menu className={className(s.menu, vertical && s.vertical)}>
                        {items.map((x, i) => (
                            <MenuItem
                                key={i}
                                {...x}
                            />
                        ))}
                    </menu>
                )}
            </Media>
        </>
    )
}
