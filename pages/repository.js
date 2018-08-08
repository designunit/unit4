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
