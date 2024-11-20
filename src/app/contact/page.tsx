import type { Metadata } from 'next'
import { TextBlock } from '@/components/TextBlock'
import { Title } from '@/components/Title'
import { Flex } from '@/components/Flex'
import { defaultPageCoverSrc, mailto, tel, telephone, yandexLocation } from '@/constants'

const name = 'ООО "дизайн юнит 4"'

export const metadata: Metadata = {
    title: 'design unit 4',
    description: `${telephone}`,
    openGraph: {
        images: [
            defaultPageCoverSrc,
        ],
    },
};

const Page: React.FC = () => (
    <>
        <Title>
            КОНТАКТЫ
        </Title>

        <Flex col
            style={{
                padding: 'var(--content-padding)',
                gap: '1rem',
            }}
        >
            <TextBlock>
                <b>
                    {name}
                </b>
            </TextBlock>

            <TextBlock>
                <a href={mailto}>
                    inbox@unit4.io
                </a>
            </TextBlock>

            <TextBlock>
                <a
                    href={yandexLocation}
                    target='_blank' rel="noreferrer"
                >
                    {name}<br />
                    Гражданская улица, 13-15<br />
                    Санкт-Петербург<br />
                    Россия
                </a>
            </TextBlock>

            <TextBlock>
                <a href={tel}>
                    {telephone}
                </a>
            </TextBlock>
        </Flex>
    </>
)

export default Page
