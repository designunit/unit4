import react from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Title from '../../components/Title'
import Article from '../../components/Article'
import Gallery from '../../components/Gallery'

export default ({ children }) => (
    <DefaultLayout>
        <Title caption="Karl Marks boulevard">БУЛЬВАР КАРЛА МАРКСА</Title>

        <Gallery
            items={[
                { src: "/static/repository/chistopol2.0/01.jpg" },
                { src: "/static/repository/chistopol2.0/02.jpg" },
                { src: "/static/repository/chistopol2.0/03.jpg" },
                { src: "/static/repository/chistopol2.0/04.jpg" },
                { src: "/static/repository/chistopol2.0/05.jpg" },
                { src: "/static/repository/chistopol2.0/06.jpg" },
                { src: "/static/repository/chistopol2.0/07.jpg" },
                { src: "/static/repository/chistopol2.0/08.jpg" },
                { src: "/static/repository/chistopol2.0/09.jpg" },
            ]}
        />
    </DefaultLayout>
)