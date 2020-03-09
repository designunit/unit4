import * as React from 'react'

import className from 'classnames'
import Head from 'next/head'
import { useLangUrlPrefix } from '../../hooks/useLangUrlPrefix'
import { useTranslation } from '../../i18n'
import { Footer } from '../Footer'
import { Logo } from '../Logo'
import { Menu } from '../Menu'

import './styles.css'

export interface IDefaultLayoutProps {
    showHeader: boolean
    center: boolean
    title: string
}

export const DefaultLayout: React.FC<IDefaultLayoutProps> = props => {
    const { t } = useTranslation()
    const langPrefix = useLangUrlPrefix()

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
                                    href: `${langPrefix}/about`,
                                    text: t('menu-about'),
                                },
                                {
                                    href: `${langPrefix}/repository`,
                                    text: t('menu-repository'),
                                },
                                {
                                    href: `${langPrefix}/partners`,
                                    text: t('menu-partners'),
                                },
                                {
                                    href: `${langPrefix}/contact`,
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
