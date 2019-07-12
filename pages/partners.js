import React from 'react'
import { Title } from '../src/components/Title'
import { Partner } from '../src/components/Partner'
import TextBlock from '../components/TextBlock';
import Article from '../components/Article';

export default () => (
    <>
        <Title>ПАРТНЕРЫ</Title>

        <Article>
            <TextBlock>
                <Partner
                    href='http://www.mlaplus.com/'
                    title='www.mlaplus.com'
                    src='/static/logo_mla+.svg'
                    imageHeight='22px'
                >
                    <p>Архитектура, градостроительство, консалтинг.</p>
                </Partner>
                
                <Partner
                    href='https://gorsreda86.ugraces.ru/'
                    title='www.knappt.com'
                    src='/static/HMAO_logo_bw.svg'
                    imageHeight='130px'
                >
                    <p>Центр компетенций по вопросам городской среды Ханты-Мансийского автономного округа.</p>
                </Partner>

                <Partner
                    href='http://www.knappt.com/'
                    title='www.knappt.com'
                    src='/static/logo_knappt.svg'
                    imageHeight='30px'
                >
                    <p>Проектируют и производят изделия из бетона, фибробетона, стеклофибробетона, стеклофиброгипса и композитных материалов.</p>
                </Partner>
           </TextBlock>
        </Article>
    </ >
)