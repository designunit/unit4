import * as React from 'react'

import className from 'classnames'
import Head from 'next/head'
import { useTranslation } from '../../i18n'
import { Footer } from '../Footer'
import { Logo } from '../Logo'
import { Menu } from '../Menu'

import './styles.less'

export interface IDefaultLayoutProps {
    showHeader: boolean
    center: boolean
    title: string
}

export const DefaultLayout: React.FC<IDefaultLayoutProps> = props => {
    const { t } = useTranslation()

    return (
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
                                    text: t('menu-about'),
                                },
                                {
                                    href: '/repository',
                                    text: t('menu-repository'),
                                },
                                {
                                    href: '/partners',
                                    text: t('menu-partners'),
                                },
                                {
                                    href: '/contact',
                                    text: t('menu-contacts'),
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
}
