import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Footer } from '../Footer'

import s from './layout.module.css'

const Menu = dynamic(() => import('../Menu').then(m => m.Menu), {
    ssr: false,
})

export interface IDefaultLayoutProps {
    children: React.ReactNode
    center: boolean
    title: string
}

export const DefaultLayout: React.FC<IDefaultLayoutProps> = props => {
    return (
        <div className={s.layout}>
            <Head>
                <title>{props.title}</title>
            </Head>
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
            <div className={s.content}>
                <main>
                    {props.children}
                </main>

                <Footer />
            </div>
        </div>
    )
}
