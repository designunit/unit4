import react from 'react'
import { Title } from '../../src/components/Title'
import Article from '../../components/Article'
import Image from '../../components/Image'

export default ({ children }) => (
    <>
        <Title>GARAGE SCREEN COMPETITION</Title>

        <Article>



            <ul>
                <p>Открытый национальный конкурс на разработку архитектурных концепций временного павильона летнего кинотеатра музея современного искусства "Гараж"
                    <br/>Парк Горького, Москва, Россия</p>
                <p>организатор: КБ Стрелка, Музей современного искусства "Гараж" </p>
                <p>ноябрь 2018 - конкурс</p>

            </ul>

                <iframe src="https://player.vimeo.com/video/299900344" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                
            
                <p>идея: <i>design unit 4</i>
                <br/>звук: <i>Натэла Нонезашвили</i>
                <br/>камера: <i>Владимир Петросян</i>
                <br/>монтаж: <i>design unit 4</i>
                <br/>команда: <i>Елизавета Владимирова, Надежда Кузнецова, Вероника Серебрякова, Артем Никитин, Григорий Балуев, Владимир Петросян, Данияр Юсупов, Сергей Барышев, Роман Тимашев</i>
                <br/>основная камера: <i>Sony PXWZ90</i></p>

        </Article>
        <Article>
                
                <iframe src="https://player.vimeo.com/video/299973652" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

                <p>музыка: <i>Jonny Greenwood Convergence</i>
                <br/>бэкстейдж камера: <i>mi YDXJ01FM</i></p>

        </Article>
    </>
)