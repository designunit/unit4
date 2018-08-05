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
                <p>
                    <Contact href="tel:79219980303">
                        +7 921 9980303
                    </Contact>
                </p>
            </TextBlock>
        </Article>
    </DefaultLayout>
)