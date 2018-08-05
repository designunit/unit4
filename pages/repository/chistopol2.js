import react from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Title from '../../components/Title'
import Article from '../../components/Article'
import Gallery from '../../components/Gallery'
import Image from '../../components/Image'

export default ({ children }) => (
    <DefaultLayout>
        <Title>БУЛЬВАР КАРЛА МАРКСА</Title>


        <Article>
        <ul>
            <p>Реконструкция сегмента Центрального бульвара
                <br/>Чистополь, Республика Татарстан, Россия
                <br/>Всероссийский конкурс лучших проектов создания комфортной 
                    городской среды в малых городах и исторических поселениях (Минстрой РФ) 
                <br/>победа в номинации “Малые города с численностью населения от 50 до 100 тыс. человек”
            </p>
            
            <p>заказчик: Фонд "Институт развития городов Республики Татарстан"
                <br/>партнеры: Исполнительный комитет Чистопольского муниципального 
                    района, MLA+ СПб</p>
            
            <p>2018 концепция, презентация</p>

        </ul>

        <Image src='https://unit4.io/files/chistopol2/01.jpg'/>

        <p>Вторая итерация развития центрального городского пространства - тематический переход от мемориалов военных лет к достижениям мирного времени. Этот важнейший сегмент включает два кулуара, посвященных памяти жертв мирного времени - Чечено-Ингушского конфликта и Чернобыльской катастрофы, в которых приняли участие сотни чистопольцев, это живая актуальная история города. Вместе с тем дизайн-решение включает редизайн стелы, посвященной основанию города, меры по организации пешеходного и транспортного движения, автопарковок, а также меры по развитию общественных сервисов и функций на сегменте, построенном в 2017.</p>


        <Image src='https://unit4.io/files/chistopol2/02.jpg'/>
        <Image src='https://unit4.io/files/chistopol2/03.jpg'/>
        <Image src='https://unit4.io/files/chistopol2/04.jpg'/>
        <Image src='https://unit4.io/files/chistopol2/05.jpg'/>
        <Image src='https://unit4.io/files/chistopol2/06.jpg'/>
        <Image src='https://unit4.io/files/chistopol2/07.jpg'/>
        

        



        </Article>
    </DefaultLayout>
)