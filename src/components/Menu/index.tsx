import className from 'classnames'
import * as React from 'react'
import Media from 'react-media'
import { Logo } from '../Logo'
import { IMenuItemProps, MenuItem } from './MenuItem'
import s from './index.module.css'
import { mdiFacebook, mdiInstagram, mdiVimeo } from '@mdi/js'
import Icon from '@mdi/react'
import { mdiDragHorizontalVariant, mdiClose } from '@mdi/js'

export interface IMenuProps {
    items: IMenuItemProps[]
    vertical?: boolean
}

export const Menu: React.FC<IMenuProps> = ({ items, vertical = false }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false)

    React.useEffect(() => {
        if (!document) {
            return
        }

        document.body.style.touchAction = mobileOpen ? 'none' : 'auto'
    }, [mobileOpen])

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
                            <Icon
                                path={mdiDragHorizontalVariant}
                                style={{ opacity: mobileOpen ? 0 : 1, fill: 'var(--color-background-opposite)' }}
                            />
                            <Icon
                                path={mdiClose}
                                className={s.cross}
                                style={{ opacity: mobileOpen ? 1 : 0 }}
                            />
                        </button>

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
                                        inbox@unit4.io
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
