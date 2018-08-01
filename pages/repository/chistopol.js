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

            <p> Реконструкция сегмента центрального бульвара по Президентской программе развития
                    общественных пространств Республики Татарстан</p>
            <p>Чистополь, Республика Татарстан, Россия </p>
            <p>заказчик Фонд "Институт развития городов Республики Татарстан"</p>
            <p>партнеры MLA+, Проектная группа 8</p>
            <p>2017 концепция, эскизный проект, реализация</p>

            <p>Бульвар по улице Карла Маркса во все времена был центральной осью исторического центра города, на нем располагались главные городские службы, самые нарядные дома, церкви и парки. Реконструируемая часть бульвара демонстрирует современное лицо исторического города и перспективы его развития - с опорой на культурные ценности прошлого, которые также имеют свое место и ценность в будущем. Три площади с навесами и павильонами, тематические кулуары, серия малых архитектурных форм и оборудования - отсыл к важным смысловым аспектам жизни и истории города: агрокультура, часовой завод "Восток", велокультура и смарт-сити. Пешеходные переходы с подсветкой, тактильным покрытием для комфорта слабовидящих и стойким клинкерным мощением, контрастным по цвету проезжей части - наглядная индикация границы преимущества пешеходного движения перед автотранспортным.
            </p>

        </Article>
    </DefaultLayout>
)