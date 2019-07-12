import react from 'react'
import { Title } from '../src/components/Title'
import TextBlock from '../components/TextBlock';
import Article from '../components/Article';

export const Partner = ({ href, title, src, height }) => (
    <p className="logo-partners">
        <a href={href} target="_blank" title={title}>
            <img src={src} height={height}/>
        </a>
    </p>
)

export default () => (
    <>
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
                    href='https://gorsreda86.ugraces.ru/'
                    title='www.knappt.com'
                    src='/static/HMAO_logo_bw.svg'
                    height='130px'
                />

                <p>Центр компетенций по вопросам городской среды Ханты-Мансийского автономного округа.</p>
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
    </ >
)