import react from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Title from '../../components/Title'
import Article from '../../components/Article'
import Gallery from '../../components/Gallery'
import Image from '../../components/Image'

export default ({ children }) => (
    <DefaultLayout>
        <Title>СКВЕР ЗЕМЦОВА</Title>
        
        <Article>
            <p>
                Концепция сквера на пересечении Белинского и Фонтанки.<br/>
                Литейный округ, Санкт-Петербург, Россия
            </p>

            <p>заказчик: фонд «Городские Проекты»</p>

            <p>февраль 2019</p>

            <p>
                <a
                    href={'https://spb.city4people.ru/project/zemcova'}
                    target="_blank"
                >[ материалы проекта по ссылке ]</a>
            </p>

            <h2>ТЕКУЩАЯ СИТУАЦИЯ</h2>

            <p>
                Сквер на пересечении улицы Белинского и набережной Фонтанки — средоточие многих 
                проблем городской среды центра Санкт-Петербурга.
                Необходимо распределить приоритеты использования пространства: 
                переопределить баланс автомобилей, пешеходов и общественных функций.
                Пешеходов, которые вынуждены проходить через площадь, в сотни раз больше автомобилей, 
                которые на ней стоят. Также нет возможности безопасно передвигаться вдоль воды.
            </p>

            <Image src='https://spb.city4people.ru/static/img_c4p/project3/todo-before_.jpg' />

            <h2>КАК ЭТО МОЖЕТ ВЫГЛЯДЕТЬ</h2>

            <p>
                Пространство должно стать удобным для безбарьерного транзита и комфортного времяпрепровождения горожан.
                Могут появиться площадка для выгула собак или детская площадка, или просто газон с лежаками. Эти решения должны приниматься не архитекторами или администрацией, а в результате семинаров соучаствующего проектирования совместно с жителями, администрациями, предпринимателями. Важно на стадии планирования привлекать операторов общественных функций открытых городских пространств.        
            </p>

            <p>Концепция — это начало разговора о том, как нужно работать с подобными местами в Петербурге и чьи интересы необходимо учитывать.
                <br />Эти преобразования ответят на запросы и требования горожан и города при соблюдении следующих шагов.
            </p>

            <Image src='https://spb.city4people.ru/static/img_c4p/project3/todo-after_.jpg' />

            <Image src='https://spb.city4people.ru/static/img_c4p/project3/todo2-after_.jpg?e' />

            <Image src='https://spb.city4people.ru/static/img_c4p/project3/todo3-after_.jpg' />
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