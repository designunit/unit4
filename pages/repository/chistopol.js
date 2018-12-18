import react from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Title from '../../components/Title'
import Article from '../../components/Article'
import Gallery from '../../components/Gallery'
import TextBlock from '../../components/TextBlock';
import Image from '../../components/Image'


export default ({ children }) => (
    <DefaultLayout>
        <Title>БУЛЬВАР КАРЛА МАРКСА ФАЗА #1</Title>

        <Article>
        <ul>
            <p>Реконструкция сегмента Центрального бульвара
                <br/>Чистополь, Республика Татарстан, Россия
                <br/>Президентская программа “Развитие общественных пространств городов Республики Татарстан” </p>
            
            <p>заказчик: Фонд "Институт развития городов Республики Татарстан"
                <br/>партнеры: MLA+ СПб, Проектная группа 8, ЛСК, knappt</p>
            
            <p>2017 концепция, эскизный проект, авторский надзор, реализация</p>

            <a href={'https://issuu.com/unit4/docs/karl_marx_boulevard'}
            >[ материалы эскизного проекта по ссылке ]</a>

        </ul>


        </Article>
        <Article>

        <Image src='https://unit4.io/files/chistopol/01.jpg'/>

            <p>Бульвар по улице Карла Маркса (Екатерининский бульвар) во все времена был центральной осью исторического центра города, на нем располагались главные городские службы, самые нарядные дома, церкви и парки. Реконструируемый фрагмент бульвара демонстрирует современное лицо исторического города и перспективы его развития - с опорой на культурные ценности прошлого, которые также имеют свое место и ценность в будущем. 
                Три площади с навесами и павильонами, тематические кулуары, серия малых архитектурных форм и дизайн оборудования отсылают к важным смысловым аспектам жизни и истории города: агрокультура, часовой завод "Восток", велокультура и компоненты умного города. 
                </p>
            

        <Image src='https://unit4.io/files/chistopol/02.jpg'/>
        <Image src='https://unit4.io/files/chistopol/04.jpg'/>
        <Image src='https://unit4.io/files/chistopol/03.jpg'/>
        <Image src='https://unit4.io/files/chistopol/05.jpg'/>
        <Image src='https://unit4.io/files/chistopol/06.jpg'/>
        <Image src='https://unit4.io/files/chistopol/16.jpg'/>
        <Image src='https://unit4.io/files/chistopol/07.jpg'/>
        <Image src='https://unit4.io/files/chistopol/08.jpg'/>
        <Image src='https://unit4.io/files/chistopol/09.jpg'/>
        <Image src='https://unit4.io/files/chistopol/10.jpg'/>
        <Image src='https://unit4.io/files/chistopol/11.jpg'/>
        <Image src='https://unit4.io/files/chistopol/12.jpg'/>
        <Image src='https://unit4.io/files/chistopol/14.jpg'/>
        <Image src='https://unit4.io/files/chistopol/15.jpg'/>


        </Article>

    </DefaultLayout>
)