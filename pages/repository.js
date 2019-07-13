import react from 'react'
import { Title } from '../src/components/Title'
import { Gallery } from '../src/components/Gallery'

export default ({ children }) => (
    <>
        <Title>РЕПОЗИТОРИЙ</Title>

        <Gallery
            theme='interactive'
            items={[
                {
                    href: '/repository/application_manual',
                    src: 'https://unit4.io/files/app_manual/manual.jpg',
                    text: (
                        <span>
                            МЕТОДИЧЕСКИЕ
                            <br/>
                            РЕКОМЕНДАЦИИ
                            <br/>
                            ПО ПОДГОТОВКЕ
                            <br/>
                            ЗАЯВКИ
                        </span>
                    ),
                },
                {
                    href: '/repository/delta',
                    src: 'https://unit4.io/files/delta/delta.jpg',
                    text: 'БЛАГОУСТРОЙСТВО ЖИЛОГО КОМПЛЕКСА COMCITY',
                },
                {
                    href: '/repository/yoshkola',
                    src: 'https://unit4.io/files/yoshkola/yoshk.gif',
                    text: 'ЙО’школа',
                },
                {
                    href: '/repository/gor_projects_spb',
                    src: 'https://spb.city4people.ru/static/img_c4p/project3/todo-after_.jpg',
                    text: (
                        <span>
                            ГОРОДСКИЕ
                            <br/>
                            ПРОЕКТЫ
                            <br/>
                            В СПб
                        </span>
                    ),
                },
                {
                    href: '/repository/boulevard_scnd',
                    src: 'https://unit4.io/files/boulevard_scnd/boulevard.jpg',
                    text: (
                        <span>
                            БУЛЬВАР
                            <br/>
                            ЖИЛОГО РАЙОНА
                            <br/>
                            СКАНДИНАВИЯ
                        </span>
                    ),
                },
                {
                    href: '/repository/park_scnd',
                    src: 'https://unit4.io/files/park_scnd/park.jpg',
                    text: (
                        <span>
                            ПАРК
                            <br/>
                            ЖИЛОГО РАЙОНА
                            <br/>
                            СКАНДИНАВИЯ
                        </span>
                    ),
                },
                {
                    href: '/repository/swarm',
                    src: 'https://unit4.io/files/swarm/swarm.jpg',
                    text: 'МУЛЬТИАГЕНТНАЯ СИСТЕМА SWARM',
                },
                {
                    href: '/repository/dc_scnd',
                    src: 'https://unit4.io/files/dc_scnd/dc.jpg',
                    text: 'ДИЗАЙН-КОД ОТКРЫТЫХ ГОРОДСКИХ ПРОСТРАНСТВ',
                },
                {
                    href: '/repository/gb_scnd',
                    src: 'https://unit4.io/files/gb_scnd/gb.jpg',
                    text: 'КОНЦЕПЦИЯ ОТКРЫТЫХ ГОРОДСКИХ ПРОСТРАНСТВ',
                },
            	{
                    href: '/repository/samarapark',
                    src: 'https://unit4.io/files/samarapark/11.jpg',
                    text: 'ПАРК ЗАГОРОДНЫЙ',
                },
                {
                    href: '/repository/garagescreen',
                    src: 'https://unit4.io/files/garagescreen/02.gif',
                    text: (
                        <span>
                            GARAGE SCREEN
                            <br/>
                            COMPETITION
                        </span>
                    ),
                },
                {
                    href: '/repository/d_scnd',
                    src: 'https://unit4.io/files/d_scnd/03.jpg',
                    text: (
                        <span>
                            ДВОРЫ
                            <br/>
                            ЖИЛОГО РАЙОНА
                            <br/>
                            СКАНДИНАВИЯ
                        </span>
                    ),
                },
            	{
                    href: '/repository/krvostok',
                    src: 'https://unit4.io/files/krvostok/01.jpg',
                    text: 'КРАСНЫЙ ВОСТОК',
                },
                {
                    href: '/repository/trollgardens',
                    src: 'https://unit4.io/files/trollgardens/05.jpg',
                    text: 'САДЫ ТРОЛЛЕЙ',
                },
                {
                    href: '/repository/chistopol2',
                    src: 'https://unit4.io/files/chistopol2/07.jpg',
                    text: (
                        <span>
                            БУЛЬВАР ЧИСТОПОЛЬ
                            <br/>
                            ФАЗА #2
                        </span>
                    ),
                },
                {
                    href: '/repository/kemb',
                    src: 'https://unit4.io/files/kemb/01.jpg',
                    text: 'НАБЕРЕЖНАЯ КАРПОВКИ',
                },
                {
                    href: '/repository/model4',
                    src: 'https://unit4.io/files/model4/01.jpg',
                    text: 'СЕРИЯ ИЗДЕЛИЙ МОДЕЛЬ : : 4',
                },
                {
                    href: '/repository/chistopol',
                    src: 'https://unit4.io/files/chistopol/02.jpg',
                    text: (
                        <span>
                            БУЛЬВАР ЧИСТОПОЛЬ
                            <br/>
                            ФАЗА #1
                        </span>
                    ),
                },
            ]}
        />
    </>
)
