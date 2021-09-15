import Head from 'next/head'
import { Footer } from '../Footer'
import { Logo } from '../Logo'
import { Menu } from '../Menu'

import s from './layout.module.css'

export interface IDefaultLayoutProps {
    showHeader: boolean
    center: boolean
    title: string
}

export const DefaultLayout: React.FC<IDefaultLayoutProps> = props => {
    return (
        <div className={s.layout}>
            <Head>
                <title>{props.title}</title>
            </Head>

            <div className={s.content}>
                {!props.showHeader ? null : (
                    <>
                        <header>
                            <Logo
                                href={'/'}
                            />

                            <Menu
                                items={[
                                    {
                                        href: '/about',
                                        text: 'about',
                                    },
                                    {
                                        href: '/projects',
                                        text: 'projects',
                                    },
                                    {
                                        href: '/partners',
                                        text: 'partners',
                                    },
                                    {
                                        href: '/contact',
                                        text: 'contacts',
                                    },
                                ]}
                            />
                        </header>
                    </>
                )}

                <main>
                    {props.children}
                </main>

                <Footer />
            </div>
        </div>
    )
}
