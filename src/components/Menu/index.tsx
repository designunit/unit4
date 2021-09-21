import className from 'classnames'
import * as React from 'react'
import { Contacts } from '../Contacts'
import { Logo } from '../Logo'
import { IMenuItemProps, MenuItem } from './MenuItem'

export interface IMenuProps {
    items: IMenuItemProps[]
    vertical?: boolean
}

export const Menu: React.FC<IMenuProps> = ({ items, vertical = false }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false)
    return (
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
    
                    position: relative;
                    width: 36px;
                    height: 36px;
                    z-index: 1;
    
                    background: none;
                    border: none;
                    padding: 0;
                }

                .mobileButton > svg {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transition: opacity .5s ease;
                }
                .mobileButton > :nth-child(1) {
                    opacity: ${mobileOpen ? 0 : 1};
                }
                .mobileButton > :nth-child(2) {
                    opacity: ${mobileOpen ? 1 : 0};
                }

                .mobileMenuAnchor {
                    display: none;
                    position: absolute;
                    top:0;
                    right: 0;
                    width: 0;
                    height: 0;
                    overflow: visible;
                }

                .mobileMenuContainer {
                    position: absolute;
                    top: 0;
                    left: ${mobileOpen ? '-100vw' : 0};
                    width: 100vw;
                    height: 100vh;
                    padding-top: 120px;
                    display: flex;
                    flex-flow: column;
                    background: var(--color-background-opposite);
                    color: var(--color-text-opposite);
                    transition: left .5s ease;
                }

                .mobileMenu {
                    left: 0;
                    background: none;
                    display: flex;
                    flex-flow: column;
                    margin-bottom: auto;
                }
    
                @media screen and (max-width: 31.25em) {
                    .mobileMenuAnchor {
                        display: block;
                    }

                    .mobileButton {
                        display: block;
                    }

                    menu {
                        display: none;
                        gap: 52px;
                    }
                }
            `}</style>

            <Logo
                href={'/'}
                invert={mobileOpen}
            />
            
            <button className='mobileButton'
                onClick={() => setMobileOpen(!mobileOpen)}
            >
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5L36 5L36 9.5L12 9.5L12 5ZM2.59078e-06 16.25L36 16.25L36 20.75L2.94047e-06 20.75L2.59078e-06 16.25ZM12 27.5L36 27.5L36 32L12 32L12 27.5Z"
                        fill="var(--color-background-opposite)"
                    />
                </svg>
                <svg viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.362179 26.2739L25.818 0.818019L29 4L16.2721 16.7279L3.54416 29.4558L0.362179 26.2739Z" fill="var(--color-background)" />
                    <path d="M25.456 29.6378L0.000148177 4.18198L3.18213 1L15.91 13.7279L28.638 26.4558L25.456 29.6378Z" fill="var(--color-background)" />
                </svg>
            </button>
            <div className='mobileMenuAnchor'>
                <div className='mobileMenuContainer'>
                    <menu className='mobileMenu'>
                        {items.map((x, i) => (
                            <MenuItem
                                key={i}
                                {...x}
                                onClick={() => setMobileOpen(false)}
                            />
                        ))}
                    </menu>
                    <Contacts
                        reverse
                    />
                </div>
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
}
