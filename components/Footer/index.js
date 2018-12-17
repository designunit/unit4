import Contact from '../Contact'

import './styles.less'

export default () => (
    <footer>
        <p className="copyright">© 2018 design unit 4</p>
        <p>
            <Contact
                href="https://www.facebook.com/designunit4/"
                mix="light"
            >
                fb  
            </Contact>

            &nbsp; &nbsp;

            <Contact
                href="https://issuu.com/unit4"
                mix="light"
            >
                issuu  
            </Contact>

            &nbsp; &nbsp;

            <Contact
                href="mailto:inbox@unit4.io"
                mix="light"
            >
                inbox@unit4.io
            </Contact>
            
        </p>
    </footer>
)