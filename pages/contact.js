import react from 'react'
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
                        href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.312563%2C59.927525&spn=0.964737%2C0.271155&z=17&l=map&mode=search&text=%D0%93%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%2013-15&sll=30.313497%2C59.938531&sspn=1.448822%2C0.432058"
                        target="_blank"
                    >
                        design unit 4<br/>
                        Гражданская ул., 13-15<br/>
                        Санкт-Петербург<br/>
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

            
        </Article>
    </DefaultLayout>
)