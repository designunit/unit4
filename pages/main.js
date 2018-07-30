import react from 'react'
import DefaultLayout from '../components/DefaultLayout';

const MenuItem = ({ href, mainText, secondText }) => (
    <li className="menu-item">
        <a href={href}>
            <p className="menu-item--main">{mainText}</p>
            <p className="menu-item--second">{secondText}</p>
        </a>
    </li>
)

export default () => (
    <DefaultLayout>
        <ul className="container">
            <MenuItem
                href="/about"
                mainText="О НАС"
                secondText="about"
            />

            <MenuItem
                href="/repository"
                mainText="РЕПОЗИТОРИЙ"
                secondText="repository"
            />

            <MenuItem
                href="/partners"
                mainText="ПАРТНЕРЫ"
                secondText="partners"
            />

            <MenuItem
                href="/contact"
                mainText="КОНТАКТЫ"
                secondText="contacts"
            />
        </ul>
    </DefaultLayout>
)