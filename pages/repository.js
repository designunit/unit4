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
                    href: '/repository/samarapark',
                    src: 'https://unit4.io/files/samarapark/11.jpg',
                    text: 'ПАРК ЗАГОРОДНЫЙ',
                },
            	{
                    href: '/repository/krvostok',
                    src: 'https://unit4.io/files/krvostok/01.jpg',
                    text: 'КРАСНЫЙ ВОСТОК',
                },
                {
                    href: '/repository/trollgardens',
                    src: '/static/repository/trollgardens/01.jpg',
                    text: 'САДЫ ТРОЛЛЕЙ',
                },
                {
                    href: '/repository/chistopol2',
                    src: '/static/repository/chistopol2/01.jpg',
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
                    src: '/static/repository/kemb/01.jpg',
                    text: 'НАБЕРЕЖНАЯ КАРПОВКИ',
                },
                {
                    href: '/repository/model4',
                    src: 'https://unit4.io/files/model4/01.jpg',
                    text: 'МОДЕЛЬ : : 4',
                },
                {
                    href: '/repository/chistopol',
                    src: 'https://unit4.io/files/chistopol/01.jpg',
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
