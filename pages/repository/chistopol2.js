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
                { src: "https://unit4.io/files/chistopol2/01.jpg" },
                { src: "https://unit4.io/files/chistopol2/02.jpg" },
                { src: "https://unit4.io/files/chistopol2/03.jpg" },
                { src: "https://unit4.io/files/chistopol2/04.jpg" },
                { src: "https://unit4.io/files/chistopol2/05.jpg" },
                { src: "https://unit4.io/files/chistopol2/06.jpg" },
                { src: "https://unit4.io/files/chistopol2/07.jpg" },
                { src: "https://unit4.io/files/chistopol2/08.jpg" },
                { src: "https://unit4.io/files/chistopol2/09.jpg" },
            ]}
        />

        <Article>

<p>Реконструкция сегмента Центрального бульвара</p>
<p>Чистополь, Республика Татарстан, Россия</p>
<p>Всероссийский конкурс лучших проектов создания комфортной 
    городской среды в малых городах и исторических поселениях (Минстрой РФ)</p>
<p>победа в номинации “Малые города с численностью населения от 50 до 100 тыс. человек”</p>
<p>клиент: Фонд "Институт развития городов Республики Татарстан"</p>
<p>партнеры: Исполнительный комитет Чистопольского муниципального 
    района, MLA+ СПб</p>
<p>2018 концепция, презентация</p>

<p>Вторая итерация развития центрального городского пространства - тематический переход от мемориалов военных лет к достижениям мирного времени. Этот важнейший сегмент включает два кулуара, посвященных памяти жертв мирного времени - Чечено-Ингушского конфликта и Чернобыльской катастрофы, в которых приняли участие сотни чистопольцев, это живая актуальная история города. Вместе с тем дизайн-решение включает редизайн стелы, посвященной основанию города, меры по организации пешеходного и транспортного движения, автопарковок, а также меры по развитию общественных сервисов и функций на сегменте, построенном в 2017.</p>

        </Article>
    </DefaultLayout>
)