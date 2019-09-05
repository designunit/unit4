import * as React from 'react'

import className from 'classnames'
import Head from 'next/head'
import { Footer } from '../Footer'
import { Logo } from '../Logo'
import { Menu } from '../Menu'

import './styles.less'

export interface IDefaultLayoutProps {
    showHeader: boolean
    center: boolean
    title: string
}

export const DefaultLayout: React.FC<IDefaultLayoutProps> = props => (
    <div className={className('layout', {
        'layout--center': false,
    })}>
        <Head>
            <title>{props.title}</title>
        </Head>

        <div className='content'>
            {!props.showHeader ? null : (
                <header>
                    <Logo
                        href={'/'}
                    />

                    <Menu vertical
                        items={[
                            {
                                href: '/about',
                                text: 'о нас',
                            },
                            {
                                href: '/repository',
                                text: 'репозиторий',
                            },
                            {
                                href: '/partners',
                                text: 'партнеры',
                            },
                            {
                                href: '/contact',
                                text: 'контакты',
                            },
                        ]}
                    />
                </header>
            )}

            <main>
                {props.children}
            </main>

            <Footer />
        </div>
    </div>
)
