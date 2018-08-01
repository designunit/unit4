import react from 'react'
import Footer from '../Footer'

import '../../style.less'
import './styles.less'

export default ({ logo = true, children }) => (
    <div className="layout">
        {!logo ? null : (
            <header>
                <a className="home" href="/main" title="logo">
                    <img src="/static/icon_menu.svg" height="25px" width="25px" />
                </a>
            </header>
        )}

        <main>
            {children}
        </main>

        <Footer/>
    </div>
)