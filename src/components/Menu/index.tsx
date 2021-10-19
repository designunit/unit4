import className from 'classnames'
import * as React from 'react'
import Media from 'react-media'
import { Logo } from '../Logo'
import { IMenuItemProps, MenuItem } from './MenuItem'
import s from './index.module.css'
import { Icon } from '@mdi/react'
import { mdiFacebook, mdiInstagram, mdiVimeo } from '@mdi/js'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export interface IMenuProps {
    items: IMenuItemProps[]
    vertical?: boolean
}

export const Menu: React.FC<IMenuProps> = ({ items, vertical = false }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false)

    const menuRef = React.useRef(null)
    React.useEffect(() => {
        if (!menuRef.current) {
            return
        }
        mobileOpen
            ? disableBodyScroll(menuRef.current)
            : enableBodyScroll(menuRef.current)
    }, [mobileOpen, menuRef])

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
                                <menu className={className(s.menu, s.mobileMenu)}
                                    ref={menuRef}
                                >
                                    {items.map((x, i) => (
                                        <MenuItem
                                            key={i}
                                            {...x}
                                            onClick={() => setMobileOpen(false)}
                                        />
                                    ))}
                                </menu>
                                <div className={s.contacts}>
                                    <div className={s.icons}>
                                        <a
                                            href={'https://www.instagram.com/unit4.io/'}
                                            target='_blank'
                                        >
                                            <Icon
                                                path={mdiInstagram}
                                                size={1.25}
                                            />
                                        </a>
                                        <a
                                            href={'https://www.facebook.com/designunit4'}
                                            target='_blank'
                                        >
                                            <Icon
                                                path={mdiFacebook}
                                                size={1.25}
                                            />
                                        </a>
                                        <a
                                            href={'https://vimeo.com/designunit4'}
                                            target='_blank'
                                        >
                                            <Icon
                                                path={mdiVimeo}
                                                size={1.25}
                                            />
                                        </a>
                                    </div>
                                    <div className={s.links} >
                                        <a
                                            href='mailto:inbox@unit4.io'
                                            target={'_blank'}
                                        >
                                            inbox @unit4.io
                                        </a>
                                        <a
                                            href='tel:+79219980303'
                                            target={'_blank'}
                                        >
                                            +7 921 9980303
                                        </a>
                                    </div>
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
