import Head from 'next/head'
import className from 'classnames'
import Footer from '../Footer'
import LinkActive from 'next-link-active';

import '../../style.less'
import './styles.less'

const MenuItem = ({ href, text }) => (
    <li className="menu-item">
        <LinkActive href={href} passHref>
            {active => active
                ? (
                    <span className="menu-item--content active">
                        {text}
                    </span>
                ) : (
                    <a className="menu-item--content">
                        {text}
                    </a>
                )}
        </LinkActive>
    </li>
)

export default ({ logo = true, center = true, title = 'design unit4', children }) => (
    <div className={className('layout', {
        'layout--center': false,
    })}>
        <Head>
            <title>{title}</title>
        </Head>

        <div className="content">
            {!logo ? null : (
                <header>
                    <a className="home" href="/" title="logo">
                        <img src="/static/icon_menu.svg" height="25px" width="25px" />
                    </a>

                    <ul className="menu">
                        <MenuItem
                            href="/about"
                            text="о нас"
                        />

                        <MenuItem
                            href="/repository"
                            text="репозиторий"
                        />

                        <MenuItem
                            href="/partners"
                            text="партнеры"
                        />

                        <MenuItem
                            href="/contact"
                            text="контакты"
                        />
                    </ul>
                </header>
            )}

            <main>
                {children}
            </main>

            <Footer />
        </div>
    </div>
)