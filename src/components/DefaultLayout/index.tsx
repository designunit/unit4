import className from 'classnames'
import Head from 'next/head'
import { Footer } from '../Footer'
import { Logo } from '../Logo'
import { Menu } from '../Menu'

import './styles.less'

export default ({ logo = true, center = true, title = 'design unit4', children }) => (
    <div className={className('layout', {
        'layout--center': false,
    })}>
        <Head>
            <title>{title}</title>
        </Head>

        <div className='content'>
            {!logo ? null : (
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
                {children}
            </main>

            <Footer />
        </div>
    </div>
)
