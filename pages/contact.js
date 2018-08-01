import react from 'react'
import DefaultLayout from '../components/DefaultLayout';
import Title from '../components/Title';
import TextBlock from '../components/TextBlock';
import Contact from '../components/Contact';

export default () => (
    <DefaultLayout>
        <div className="container">
            <Title caption="contacts">КОНТАКТЫ</Title>

            <TextBlock>
                <Contact
                    href="mailto:inbox@unit4.io"
                >
                    inbox@unit4.io
                </Contact>
                <p>
                    +7 921 9980303
                </p>
            </TextBlock>
        </div>
    </DefaultLayout>
)