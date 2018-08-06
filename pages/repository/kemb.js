import react from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Title from '../../components/Title'
import Article from '../../components/Article'
import Gallery from '../../components/Gallery'
import Image from '../../components/Image'

export default ({ children }) => (
   
    <DefaultLayout>
    <Title>НАБЕРЕЖНАЯ КАРПОВКИ</Title>


    <Article>
    <ul>
        <p>Концепция районного центра на набережной реки Карповка
            <br/>Санкт-Петербург, Россия
        </p>
        
        <p>заказчик: администрация Петроградского района СПб
            <br/>партнеры: исследовательская группа “Друзья Карповки”, 
  независимая экспертная платформа ОткрытаяЛабораторияГород (ОЛГ) </p>
        
        <p>осень 2017 - зима 2018 - концепция, презентация, технический отчет</p>

    </ul>

    <Image src='https://unit4.io/files/kemb/01.jpg'/>

    <p>
        Река Карповка располагает не только набором разнообразных прибрежных ландшафтов, но и пронизывает различные среды (промышленную застройку, новое жилье, застройку исторического центра, медицинского комплекса, конструктивизм и сталинский ампир), и соединяет интересы разнообразных социально-культурных групп (студенты, клерки, местные жители, предприниматели и т.п.).
    </p>

    <Image src='https://unit4.io/files/kemb/02.jpg'/>
    
    <p>
        На основе материалов исследования группы “Друзья Карповки” агрегировано комплексное проектное решение для публичного и экспертного обсуждения. Оно включает как сквозные решения по связности открытых городских пространств (велопешеходная сеть, беговые и прогулочные дорожки), так и уникальные решения (велопешеходные мосты-амфитеатры, понтонные набережные, плавучие модули) существенно расширяющие общественные функции водных пространств и форм общественных сервисов.
    </p>

    
    <Image src='https://unit4.io/files/kemb/03.jpg'/>
    <Image src='https://unit4.io/files/kemb/04.jpg'/>
    <Image src='https://unit4.io/files/kemb/05.jpg'/>
    <Image src='https://unit4.io/files/kemb/06.jpg'/>
    <Image src='https://unit4.io/files/kemb/07.jpg'/>
    

    



    </Article>
</DefaultLayout>
   
//    <DefaultLayout>
//         <Title caption="Karpovka Embankment">KARPOVKA EMBANKMENT</Title>

//         <Gallery
//             items={[
//                 { src: "/static/repository/kemb/01.jpg" },
//                 { src: "/static/repository/kemb/02.jpg" },
//                 { src: "/static/repository/kemb/03.jpg" },
//                 { src: "/static/repository/kemb/04.jpg" },
//                 { src: "/static/repository/kemb/05.jpg" },
//                 { src: "/static/repository/kemb/06.jpg" },
//                 { src: "/static/repository/kemb/07.jpg" },
//             ]}
//         />
//     </DefaultLayout>
)