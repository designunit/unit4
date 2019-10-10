import react from 'react'
import { Title } from '../src/components/Title'
import { Gallery } from '../src/components/Gallery'

export default ({ children }) => (
    <>
        <Title>РЕПОЗИТОРИЙ</Title>

        <Gallery
            style={{
                marginBottom: 50,
            }}
            items={[
                {
                    href: '/repository/uray_ppi',
                    src: 'https://unit4.io/files/uray_ppi/urai.jpg',
                    text: (
                        <span>
                            ИССЛЕДОВАНИЕ
                            <br/>
                            УРАЙ ХМАО
                        </span>
                    ),
                },
                {
                    href: '/repository/heterotopia',
                    src: 'https://unit4.io/files/heterotopia/heterotopia.gif',
                    text: (
                        <span>
                            ГЕТЕРОТОПИИ
                            <br/>
                            СО-ВРЕМЕННОСТИ
                        </span>
                    ),
                },
                {
                    href: '/repository/oymyakon',
                    src: 'https://unit4.io/files/oy/viz_gulag.jpg',
                    text: (
                        <span>
                            ОЙМЯКОН
                            <br/>
                            п(о)люс
                            <br/>
                            со-временности
                        </span>
                    ),
                },
                {
                    href: '/repository/hovrinka',
                    src: 'https://unit4.io/files/hovrinka/hovrinka.jpg',
                    text: (
                        <span>
                            СОЦИАЛЬНО-КУЛЬТУРНЫЙ
                            <br/>
                            ЦЕНТР
                            <br/>
                            ХОВРИНКА
                        </span>
                    ),
                },
                {
                    href: '/repository/delta',
                    src: 'https://unit4.io/files/delta/delta.jpg',
                    text: 'БЛАГОУСТРОЙСТВО ЖК COMCITY МОСКВА',
                },
                {
                    href: '/repository/application_manual',
                    src: 'https://unit4.io/files/app_manual/manual.jpg',
                    text: (
                        <span>
                            МЕТОДИЧЕСКИЕ
                            <br/>
                            РЕКОМЕНДАЦИИ
                            <br/>
                            ХМАО
                        </span>
                    ),
                },
                {
                    href: '/repository/gor_projects_spb',
                    src: 'https://spb.city4people.ru/static/img_c4p/project3/todo-after_.jpg',
                    text: 'КОНЦЕПЦИИ spb.city4people.ru',
                },
                {
                    href: '/repository/yoshkola',
                    src: 'https://unit4.io/files/yoshkola/04.jpg',
                    text: (
                        <span>
                            IT ШКОЛА
                            <br/>
                            ЙОШКАР-ОЛА
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
                    href: '/repository/shelter',
                    src: 'https://unit4.io/files/shelter/01.jpg',
                    text: 'ИНСТАЛЛЯЦИЯ NEST WIND SHELTER',
                },
                {
                    href: '/repository/swarm',
                    src: 'https://unit4.io/files/swarm/swarm.jpg',
                    text: 'МОДЕЛИРОВАНИЕ ПЕШЕХОДНЫХ ПОТОКОВ SWARM',
                },
                {
                    href: '/repository/dc_scnd',
                    src: 'https://unit4.io/files/dc_scnd/dc.gif',
                    text: 'ДИЗАЙН-КОД ОТКРЫТЫХ ГОРОДСКИХ ПРОСТРАНСТВ',
                },
                {
                    href: '/repository/gb_scnd',
                    src: 'https://unit4.io/files/gb_scnd/gb.jpg',
                    text: 'КОНЦЕПЦИЯ ОТКРЫТЫХ ГОРОДСКИХ ПРОСТРАНСТВ',
                },
            	{
                    href: '/repository/samarapark',
                    src: 'https://unit4.io/files/samarapark/10.jpg',
                    text: 'ПАРК ЗАГОРОДНЫЙ САМАРА',
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
                    text: (
                        <span>
                            КОНЦЕПЦИЯ 
                            <br/>
                            БЛАГОУСТРОЙСТВА
                            <br/>
                            ЗАВОДА
                            <br/>
                            КРАСНЫЙ ВОСТОК
                        </span>
                    ),
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
                            ТАТАРСТАН
                            <br/>
                            ФАЗА #2
                        </span>
                    ),
                },
                {
                    href: '/repository/kemb',
                    src: 'https://unit4.io/files/kemb/01.jpg',
                    text: 'ИССЛЕДОВАНИЕ НАБЕРЕЖНОЙ КАРПОВКИ',
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
                            ТАТАРСТАН
                            <br/>
                            ФАЗА #1
                        </span>
                    ),
                },
            ]}
        />
    </>
)
