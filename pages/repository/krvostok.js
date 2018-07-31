import react from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Title from '../../components/Title'
import Article from '../../components/Article'
import Gallery from '../../components/Gallery'

export default ({ children }) => (
    <DefaultLayout>
        <Title caption="Red East">RED EAST</Title>

        <Gallery
            items={[
                { src: "/static/repository/krvostok/01.jpg" },
                { src: "/static/repository/krvostok/02.jpg" },
                { src: "/static/repository/krvostok/03.jpg" },
                { src: "/static/repository/krvostok/04.jpg" },
                { src: "/static/repository/krvostok/05.jpg" },
            ]}
        />
    </DefaultLayout>
)