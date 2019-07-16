import { mdiFacebook } from '@mdi/js'
import { mdiVimeo } from '@mdi/js'
import { mdiBehance } from '@mdi/js'
import { mdiInstagram } from '@mdi/js'
import Icon from '@mdi/react'
import { NextPage } from 'next'
import TextBlock from '../components/TextBlock'
import { Article } from '../src/components/Article'
import { Title } from '../src/components/Title'

const maps = 'https://yandex.ru/maps/2/saint-petersburg/?spn=0.964737%2C0.271155&z=14&l=map&mode=search&ll=30.332637%2C59.934321&text=%D0%93%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%2013-15&sll=30.313497%2C59.938531&sspn=1.448822%2C0.432058' // tslint:disable-line

const Page: NextPage = () => (
    <>
        <Title>КОНТАКТЫ</Title>

        <Article>
            <TextBlock>
                <a href='mailto:inbox@unit4.io'>
                    inbox@unit4.io
                </a>
            </TextBlock>

            <TextBlock>
                <a
                    href={maps}
                    target='_blank'
                >
                    ООО "дизайн юнит 4"<br />
                    Гражданская улица, 13-15<br />
                    Санкт-Петербург<br />
                    Россия
                </a>
            </TextBlock>

            <TextBlock>
                <a href='tel:79219980303'>
                    +7 921 9980303
                </a>
            </TextBlock>

            <a
                href={'https://www.facebook.com/designunit4'}
                target='_blank'
            >
                <Icon
                    path={mdiFacebook}
                    className={'icon-link'}
                    size={1}
                />
            </a>
            &nbsp; &nbsp;
            <a
                href={'https://vimeo.com/designunit4'}
                target='_blank'
            >
                <Icon
                    path={mdiVimeo}
                    className={'icon-link'}
                    size={0.9}
                />
            </a>
            &nbsp; &nbsp;

            <a
                href={'https://www.instagram.com/unit4.io/'}
                target='_blank'
            >
                <Icon
                    path={mdiInstagram}
                    className={'icon-link'}
                    size={1}
                />
            </a>
            &nbsp; &nbsp;

            <a
                href={'https://www.behance.net/designunit4'}
                target='_blank'
            >
                <Icon
                    path={mdiBehance}
                    className={'icon-link'}
                    size={1}
                />
            </a>

        </Article>
    </>
)

export default Page
