import react from 'react'
import DefaultLayout from '../components/DefaultLayout';
import Title from '../components/Title';
import Gallery from '../components/Gallery';

export default ({ children }) => (
    <DefaultLayout>
        <Title caption="repository">РЕПОЗИТОРИЙ</Title>

        <Gallery
            theme='interactive'
            items={[
                {
                    href: '/repository/chistopol',
                    src: '/static/repository/chistopol/01.jpg',
                    text: 'KARL MARX\nBOULEVARD\nPHASE #1',
                },
                {
                    href: '/repository/chistopol2',
                    src: '/static/repository/chistopol2/01.jpg',
                    text: 'KARL MARX\nBOULEVARD\nPHASE #2',
                },
                {
                    href: '/repository/kemb',
                    src: '/static/repository/kemb/01.jpg',
                    text: 'KARPOVKA\nEMBANKMENT',
                },
                {
                    href: '/repository/krvostok',
                    src: '/static/repository/krvostok/01.jpg',
                    text: 'RED EAST',
                },
                {
                    href: '/repository/trollgardens',
                    src: '/static/repository/trollgardens/01.jpg',
                    text: 'TROLL GARDENS',
                },
            ]}
        />
    </DefaultLayout>
)