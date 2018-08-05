import className from 'classnames'
import Footer from '../Footer'

import '../../style.less'
import './styles.less'


const MenuItem = ({ href, mainText, secondText }) => (
    <li className="menu-item">
        <a href={href}>
            <p className="menu-item--main">{mainText}</p>
            <p className="menu-item--second">{secondText}</p>
        </a>
    </li>
)



export default ({ logo = true, center = true, children }) => (
    <div className={className('layout', {
        'layout--center': false,
    })}>
        <div className="content">
            {!logo ? null : (
                <header>
                    <a className="home" href="/index" title="logo">
                        <img src="/static/icon_menu.svg" height="25px" width="25px" />
                    </a>

                    <ul className="menu">
                        <MenuItem
                            href="/about"
                            secondText="о нас"
                        />

                        <MenuItem
                            href="/repository"
                            secondText="репозиторий"
                        />

                        <MenuItem
                            href="/partners"
                            secondText="партнеры"
                        />

                        <MenuItem
                            href="/contact"
                            secondText="контакты"
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