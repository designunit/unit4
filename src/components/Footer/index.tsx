import s from './footer.module.css'

import { LangButton } from '../LangButton'

export const Footer: React.FC = () => (
    <footer className={s.footer}>
        <section>© 2017-2023 design : : unit 4</section>
        <section className={'right'}>
            <a
                href='mailto:inbox@unit4.io'
                target={'_blank'}
                rel="noreferrer"
            >
                inbox@unit4.io
            </a>
            <LangButton style={{
                marginTop: 10,
            }}/>
        </section>
    </footer>
)
