import Contact from '../Contact'

import './styles.less'

export default () => (
    <footer>
        <p className="copyright">© 2018 design unit 4</p>
        <p>

            <Contact
                href="mailto:inbox@unit4.io"
                mix="light"
            >
                inbox@unit4.io
            </Contact>

        </p>
    </footer>
)