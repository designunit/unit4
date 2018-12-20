import react from 'react'
import Icon from '@mdi/react'
import { mdiFacebook } from '@mdi/js'
import { mdiVimeo } from '@mdi/js'
import { mdiBehance } from '@mdi/js'
import { mdiInstagram } from '@mdi/js'
import DefaultLayout from '../components/DefaultLayout';
import Title from '../components/Title';
import TextBlock from '../components/TextBlock';
import Contact from '../components/Contact';
import Article from '../components/Article';


export default () => (
    <DefaultLayout>
        <Title>КОНТАКТЫ</Title>

        <Article>
            <TextBlock>
                <p>
                    <Contact href="mailto:inbox@unit4.io">
                        inbox@unit4.io
                    </Contact>
                </p>
            </TextBlock>

            <TextBlock>
                <p>
                    <Contact
                        href="https://yandex.ru/maps/2/saint-petersburg/?l=map&ll=30.317140%2C59.929746&mode=search&oid=223730420096&ol=biz&sctx=ZAAAAAgBEAAaKAoSCTxGgVcuUD5AEYKigXHT9k1AEhIJ%2FOUBAGAmcD8RQjBwLRG6Uj8iBAABAgQoCjAAONqnkb2rl6WHiQFAuJ4BSAFVzczMPlgAagJydXAAnQHNzMw9oAEAqAEA&sll=30.317140%2C59.929746&spn=0.964737%2C0.271155&sspn=0.095620%2C0.027718&text=Design%20Unit%204&z=14.4"
                        target="_blank"
                    >
                        design unit 4<br />
                        Гражданская улица, 13-15<br />
                        Санкт-Петербург<br />
                        Россия
                    </Contact>
                </p>
            </TextBlock>

            

            <TextBlock>
                <p>
                    <Contact href="tel:79219980303">
                        +7 921 9980303
                    </Contact>
                </p>
            </TextBlock>

            <a
                href={'https://www.facebook.com/designunit4'}
                target="_blank"
            >
            <svg width="40" height="40">
                <use href="../static/icons/sprite.svg#fb"></use>
            </svg>
            </a>

            &nbsp; &nbsp;
            <a
                href={'https://vimeo.com/designunit4'}
                target="_blank">
                <svg width="40" height="40">
                <use href="../static/icons/sprite.svg#vimeo"></use>
            </svg>
            </a>
            &nbsp; &nbsp;

            <a
                href={'https://www.instagram.com/unit4.io/'}
                target="_blank"
            >
                <svg width="40" height="40">
                <use href="../static/icons/sprite.svg#insta"></use>
            </svg>
            </a>
            &nbsp; &nbsp;


            <a
                href={'https://www.behance.net/designunit4'}
                target="_blank"

            >
                <svg width="40" height="40">
                <use href="../static/icons/sprite.svg#be"></use>
            </svg>
            </a>

            &nbsp; &nbsp;

            <a
                href={'https://issuu.com/unit4'}
                target="_blank"
            >
                <svg width="40" height="40">
                <use href="../static/icons/sprite.svg#issuu"></use>
            </svg>
            </a>
            
            
        </Article>
    </DefaultLayout>
)