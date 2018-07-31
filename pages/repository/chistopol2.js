import react from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Title from '../../components/Title'
import Gallery from '../../components/Gallery'

export default ({ children }) => (
    <DefaultLayout>
        <Title caption="Karl Marks boulevard">БУЛЬВАР КАРЛА МАРКСА</Title>

        <Gallery
            items={[
                { src: "/static/repository/chistopol2/01.jpg" },
                { src: "/static/repository/chistopol2/02.jpg" },
                { src: "/static/repository/chistopol2/03.jpg" },
                { src: "/static/repository/chistopol2/04.jpg" },
                { src: "/static/repository/chistopol2/05.jpg" },
                { src: "/static/repository/chistopol2/06.jpg" },
                { src: "/static/repository/chistopol2/07.jpg" },
                { src: "/static/repository/chistopol2/08.jpg" },
                { src: "/static/repository/chistopol2/09.jpg" },
            ]}
        />
    </DefaultLayout>
)