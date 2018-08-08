import react from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Title from '../../components/Title'
import Article from '../../components/Article'
import Gallery from '../../components/Gallery'
import Image from '../../components/Image'

export default ({ children }) => (
    <DefaultLayout>
        <Title>САДЫ ТРОЛЛЕЙ</Title>

        <Article>
            <Image src='https://unit4.io/files/trollgardens/01.jpg'/>

        <ul>
            <p>Концепция открытых городских пространств + парк жилого района Скандинавия, Москва
                <br/>первое место в конкурсе с международным участием </p>
            
            <p>заказчик: ГК А101, Москва
            <br/>партнеры: MLA+ СПб
            <br/>при участии: Артем Никитин, Юлия Ганкевич, Ольга Чернякова</p>
            <p>ноябрь 2017 - концепция, презентация</p>

        </ul>

            
            <Image src='https://unit4.io/files/trollgardens/02.jpg'/>

            <p>5 минут прогулки, и вы на мосту над темной водой в чаще леса. С другой стороны лесного пруда - водный комплекс с сауной. В лесу - странноватого вида сооружение, там занимаются восточной гимнастикой. Дорожка из деревянной брусчатки ведет к другому похожему сооружению - его облепили дети, а на площади перед ним жители возводят вантовую стелу к празднику. Запах ольховых шишек. 
            </p>

            <Image src='https://unit4.io/files/trollgardens/03.jpg'/>
            <Image src='https://unit4.io/files/trollgardens/04.jpg'/>           
            <Image src='https://unit4.io/files/trollgardens/05.jpg'/>
            <Image src='https://unit4.io/files/trollgardens/06.jpg'/>
            <Image src='https://unit4.io/files/trollgardens/07.jpg'/>
            <Image src='https://unit4.io/files/trollgardens/08.jpg'/>
            <Image src='https://unit4.io/files/trollgardens/09.jpg'/>
            <Image src='https://unit4.io/files/trollgardens/10.jpg'/>
            <Image src='https://unit4.io/files/trollgardens/11.jpg'/>

        </Article>
    </DefaultLayout>
)