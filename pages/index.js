import react from 'react'
import MainLogo from '../components/MainLogo'
import Contact from '../components/Contact'

import DefaultLayout from '../components/DefaultLayout';

export default () => (
    <DefaultLayout

    >
        {/* <Contact
            mix='contact--dark'
            href="mailto:inbox@unit4.io"
        >
            inbox@unit4.io
        </Contact> */}
        <MainLogo />
    </DefaultLayout>
)
