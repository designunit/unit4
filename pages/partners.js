import react from 'react'
import DefaultLayout from '../components/DefaultLayout';
import Title from '../components/Title';
import TextBlock from '../components/TextBlock';
import Article from '../components/Article';

const Partner = ({ href, title, src }) => (
    <p className="logo-partners">
        <a href={href} target="_blank" title={title}>
            <img src={src} height="22px" />
        </a>
    </p>
)

export default () => (
    <DefaultLayout>
        <Title>ПАРТНЕРЫ</Title>

        <Article>
            <TextBlock>
                <Partner
                    href='http://www.mlaplus.com/'
                    title='www.mlaplus.com'
                    src='/static/logo_mla+.svg'
                />

                <Partner
                    href='http://www.knappt.com/'
                    title='www.knappt.com'
                    src='/static/logo_knappt.svg'
                />

                <Partner
                    href='https://vk.com/divometallspb'
                    title='vk.com/divometallspb'
                    src='/static/logo_divo_metall.svg'
                />
           </TextBlock>
        </Article>
    </DefaultLayout >
)