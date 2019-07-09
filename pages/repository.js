import react from 'react'
import DefaultLayout from '../components/DefaultLayout';
import Title from '../components/Title';
import Gallery from '../components/Gallery';

export default ({ children }) => (
    <DefaultLayout
        center={true}
    >
        <Title>РЕПОЗИТОРИЙ</Title>

        <Gallery
            theme='interactive'
            items={[
                {
                    href: '/repository/delta',
                    src: 'https://unit4.io/files/delta/delta.jpg',
                    text: 'БЛАГОУСТРОЙСТВО ЖИЛОГО РАЙОНА ДЕЛЬТА',
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
                    text: 'ДИЗАЙН ДВОРОВ ЖИЛОГО РАЙОНА СКАНДИНАВИЯ',
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
                    text: 'МОДЕЛЬ : : 4',
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
    </DefaultLayout>
)
