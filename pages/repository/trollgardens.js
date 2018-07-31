import react from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Title from '../../components/Title'
import Article from '../../components/Article'
import Gallery from '../../components/Gallery'

export default ({ children }) => (
    <DefaultLayout>
        <Title caption="Troll Gardens">TROLL GARDENS</Title>

        <Gallery
            items={[
                { src: "/static/repository/trollgardens/01.jpg" },
                { src: "/static/repository/trollgardens/02.jpg" },
                { src: "/static/repository/trollgardens/03.jpg" },
                { src: "/static/repository/trollgardens/04.jpg" },
                { src: "/static/repository/trollgardens/05.jpg" },
                { src: "/static/repository/trollgardens/06.jpg" },
                { src: "/static/repository/trollgardens/07.jpg" },
            ]}
        />
    </DefaultLayout>
)