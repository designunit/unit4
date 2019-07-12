import react from 'react'
import { Title } from '../../src/components/Title'
import Article from '../../components/Article'
import Image from '../../components/Image'
import SwitchImage from '../../components/SwitchImage'

export default ({ children }) => (
    <>
        <Title>СКВЕР ЗЕМЦОВА</Title>

        <Article>
            <p>
                Концепция сквера на пересечении Белинского и Фонтанки.<br />
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

            <SwitchImage
                images={[
                    {
                        src: 'https://spb.city4people.ru/static/img_c4p/project3/todo-before_.jpg',
                        buttonText: 'Скрыть комментарии',
                    },
                    {
                        src: 'https://spb.city4people.ru/static/img_c4p/project3/todo-before_nocomments.jpg',
                        buttonText: 'Показать комментарии',
                    },
                ]}
            />

            <h2>КАК ЭТО МОЖЕТ ВЫГЛЯДЕТЬ</h2>

            <p>
                Пространство должно стать удобным для безбарьерного транзита и комфортного времяпрепровождения горожан.
                Могут появиться площадка для выгула собак или детская площадка, или просто газон с лежаками. Эти решения должны приниматься не архитекторами или администрацией, а в результате семинаров соучаствующего проектирования совместно с жителями, администрациями, предпринимателями. Важно на стадии планирования привлекать операторов общественных функций открытых городских пространств.
            </p>

            <p>Концепция — это начало разговора о том, как нужно работать с подобными местами в Петербурге и чьи интересы необходимо учитывать.
                <br />Эти преобразования ответят на запросы и требования горожан и города при соблюдении следующих шагов.
            </p>

            <SwitchImage
                images={[
                    {
                        src: 'https://spb.city4people.ru/static/img_c4p/project3/todo-after_.jpg',
                        buttonText: 'Скрыть комментарии',
                    },
                    {
                        src: 'https://spb.city4people.ru/static/img_c4p/project3/todo-after_nocomments.jpg',
                        buttonText: 'Показать комментарии',
                    },
                ]}
            />

            <SwitchImage
                images={[
                    {
                        src: 'https://spb.city4people.ru/static/img_c4p/project3/todo2-after_.jpg?e',
                        buttonText: 'Скрыть комментарии',
                    },
                    {
                        src: 'https://spb.city4people.ru/static/img_c4p/project3/todo2-after_nocomments.jpg?e',
                        buttonText: 'Показать комментарии',
                    },
                ]}
            />

            <SwitchImage
                images={[
                    {
                        src: 'https://spb.city4people.ru/static/img_c4p/project3/todo3-after_.jpg',
                        buttonText: 'Скрыть комментарии',
                    },
                    {
                        src: 'https://spb.city4people.ru/static/img_c4p/project3/todo3-after_nocomments.jpg',
                        buttonText: 'Показать комментарии',
                    },
                ]}
            />
            
        </Article>
    </>

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