import react from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Title from '../../components/Title'
import Article from '../../components/Article'
import Gallery from '../../components/Gallery'
import TextBlock from '../../components/TextBlock';

export default ({ children }) => (
    <DefaultLayout>
        <Title caption="Karl Marks boulevard">БУЛЬВАР КАРЛА МАРКСА</Title>

        <Gallery
            items={[
                { src: "https://unit4.io/files/chistopol/01.jpg" },
                { src: "https://unit4.io/files/chistopol/02.jpg" },
                { src: "https://unit4.io/files/chistopol/03.jpg" },
                { src: "https://unit4.io/files/chistopol/04.jpg" },
                { src: "https://unit4.io/files/chistopol/05.jpg" },
                { src: "https://unit4.io/files/chistopol/06.jpg" },
                { src: "https://unit4.io/files/chistopol/07.jpg" },
                { src: "https://unit4.io/files/chistopol/08.jpg" },
                { src: "https://unit4.io/files/chistopol/09.jpg" },
                { src: "https://unit4.io/files/chistopol/10.jpg" },
                { src: "https://unit4.io/files/chistopol/11.jpg" },
                { src: "https://unit4.io/files/chistopol/12.jpg" },
                { src: "https://unit4.io/files/chistopol/13.jpg" },
                { src: "https://unit4.io/files/chistopol/14.jpg" },
                { src: "https://unit4.io/files/chistopol/15.jpg" },
            ]}
        />
        <Article>

            <p>Реконструкция сегмента Центрального бульвара </p>
            <p>Чистополь, Республика Татарстан, Россия </p>
            <p>Президентская программа “Развитие общественных 
                пространств городов Республики Татарстан”  </p>
            <p>клиент: Фонд "Институт развития городов Республики Татарстан"</p>
            <p>партнеры: MLA+ СПб, Проектная группа 8, ЛСК, knappt</p>
            <p>2017 концепция, эскизный проект, авторский надзор, реализация</p>

            <p>Бульвар по улице Карла Маркса (Екатерининский бульвар) во все времена был центральной осью исторического центра города, на нем располагались главные городские службы, самые нарядные дома, церкви и парки. Реконструируемый фрагмент бульвара демонстрирует современное лицо исторического города и перспективы его развития - с опорой на культурные ценности прошлого, которые также имеют свое место и ценность в будущем. 
                Три площади с навесами и павильонами, тематические кулуары, серия малых архитектурных форм и дизайн оборудования отсылают к важным смысловым аспектам жизни и истории города: агрокультура, часовой завод "Восток", велокультура и компоненты умного города. 
                </p>

        </Article>
    </DefaultLayout>
)