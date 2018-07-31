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
                { src: "/static/repository/chistopol/01.jpg" },
                { src: "/static/repository/chistopol/02.jpg" },
                { src: "/static/repository/chistopol/03.jpg" },
                { src: "/static/repository/chistopol/04.jpg" },
                { src: "/static/repository/chistopol/05.jpg" },
                { src: "/static/repository/chistopol/06.jpg" },
            ]}
        />

        <Article>
            <p>
                Contemporary comfortable and affordable public urban space with a thought-out design is an achievement of civil life.
                Location: city of Chistopol, Republic of Tatarstan, Russia
                Client: Institute of Urban Development of the Republic of Tatarstan
                Programme: 1,2Ha part of the boulevard along the central city street by Government development program for public spaces of the Republic of Tatarstan
            </p>

            <p>
                The parkway along Karl Marx Street has always been the central point of the city, it housed the main city services, the most elegant houses, churches and parks. With the passage of time the boulevard was filled with predominantly memorial of war times content, except the remained south part. In virtue of participatory design with citizen and city administration MLA+ devoted this part of parkway to achievements of peaceful civil life.
                The boulevard was beloved by the citizens, but its use as a public space was minimal due to a number of inconveniences and meager functionality, and did not not meet the requirements for the safety and comfort urban space.
            </p>

            <p>
                The reconstructed part of the boulevard demonstrates the modern face of the historic city and the prospects for its development - based on the cultural values of the past, with their place and value in the future.
                The modern urban public space is not just serviceable and beautiful, but it is the infrastructure of the city's social life, which contributes to the development and diversity of functions, self-realization and self-determination of citizens.
                On the boulevard there appeared a wide illuminated and always dry pedestrian clinker path, as 100 years ago. Instead of asphalt paved areas across the boulevard, three raised pedestrian areas were designed.
                One square is dedicated to a fountain that plays over a repaired water column. It is supplemented by a bridged bridge with benches.
                Another area includes a car park with places for disabled people. There is also a large canopy with built-in lighting and large swings. In the future, it is planned to build a pavilion with public functions and a public toilet ( there is no stationary public toilet in the whole city). Citizens themselves can decide what function of the pavilion they need most. Opposite the canopy there is a long bench with built-in tables and power sockets.
                The third square - opposite the entrance to the city garden - is a solid bright yellow surface with benches and ornamental maples. This is a place for festive performances, fairs, concerts and exhibitions.
            </p>

            <p>
                The usage Corten steel and coloured polyurethane covering in urban furniture are innovative design solutions in Republic of Tatarstan.
            </p>

            <p>
                Within the framework of inheritance and retransmission in the future of the cultural values ​​of the city's development, special patterns and urban furnishings were developed, embodying the meanings inherited by the future from the past.
            </p>

            <p>
                Team: MLA+: Markus Appenzeller, Yana Golubeva
            </p>

            <p>
                design::unit: Daniyar Yusupov, Vladimir Petrosyan, Nadezhda Kuznetsova, Elizaveta Vladimirova
            </p>

            <p>
                Invited specialists: Project Group 8
            </p>

            <p>
                Stages:
            </p>

            <ul>
                <li>
                    2017 Concept, Design Development, Public communications
                </li>

                <li>
                    2017-2018 Under construction
                </li>
            </ul>
        </Article>
    </DefaultLayout>
)