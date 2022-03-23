import Head from 'next/head'
import { Footer } from '../Footer'
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
            {!props.showHeader ? null : (
                <>
                    <header>
                        <Menu
                            items={[
                                {
                                    href: '/',
                                    text: 'projects',
                                },
                                {
                                    href: '/about',
                                    text: 'about',
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
                    <div className={s.headerSpacer} />
                </>
            )}
            <div className={s.content}>
                <main>
                    {props.children}
                </main>

                <Footer />
            </div>
        </div>
    )
}
