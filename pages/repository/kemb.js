import react from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Title from '../../components/Title'
import Article from '../../components/Article'
import Gallery from '../../components/Gallery'

export default ({ children }) => (
    <DefaultLayout>
        <Title caption="Karpovka Embankment">KARPOVKA EMBANKMENT</Title>

        <Gallery
            items={[
                { src: "/static/repository/kemb/01.jpg" },
                { src: "/static/repository/kemb/02.jpg" },
                { src: "/static/repository/kemb/03.jpg" },
                { src: "/static/repository/kemb/04.jpg" },
                { src: "/static/repository/kemb/05.jpg" },
                { src: "/static/repository/kemb/06.jpg" },
                { src: "/static/repository/kemb/07.jpg" },
            ]}
        />
    </DefaultLayout>
)