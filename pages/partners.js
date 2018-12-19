import react from 'react'
import DefaultLayout from '../components/DefaultLayout';
import Title from '../components/Title';
import TextBlock from '../components/TextBlock';
import Article from '../components/Article';

const Partner = ({ href, title, src, height }) => (
    <p className="logo-partners">
        <a href={href} target="_blank" title={title}>
            <img src={src} height={height}/>
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
                    height='22px'
                />

                <p>Архитектура, градостроительство, консалтинг.</p>
                <br/>

                <Partner
                    href='http://www.knappt.com/'
                    title='www.knappt.com'
                    src='/static/logo_knappt.svg'
                    height='30px'
                />

                <p>Проектируют и производят изделия из бетона, фибробетона, стеклофибробетона, стеклофиброгипса и композитных материалов.</p>


           </TextBlock>
        </Article>
    </DefaultLayout >
)