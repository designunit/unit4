import { NextPage } from 'next'
import * as React from 'react'
import TextBlock from '../components/TextBlock'
import { Article } from '../src/components/Article'
import { Partner } from '../src/components/Partner'
import { Title } from '../src/components/Title'

const Page: NextPage = () => (
    <>
        <Title>ПАРТНЕРЫ</Title>

        <Article>
            <TextBlock>
                <Partner
                    href='http://www.mlaplus.com/'
                    title='www.mlaplus.com'
                    src='/static/logo_mla.svg'
                    imageHeight='22px'
                >
                    <span>
                        Архитектура, градостроительство, консалтинг.
                    </span>
                </Partner>

                <Partner
                    href='https://gorsreda86.ugraces.ru/'
                    title='www.knappt.com'
                    src='/static/HMAO_logo_bw.svg'
                    imageHeight='130px'
                >
                    <span>
                        Центр компетенций по вопросам городской среды
                        Ханты-Мансийского автономного округа - Югры.
                    </span>
                </Partner>

                <Partner
                    href='http://urbanica.spb.ru/'
                    title='urbanica.spb.ru'
                    src='/static/urbanica_logo.svg'
                    imageHeight='200px'
                >
                    <span>
                        Институт территориального планирования Урбаника.
                        <br/>
                        Cпециализируется на градостроительном проектированиии и консалтинге.
                    </span>
                </Partner>

                <Partner
                    href='http://www.knappt.com/'
                    title='www.knappt.com'
                    src='/static/logo_knappt.svg'
                    imageHeight='30px'
                >
                    <span>
                        Проектируют и производят изделия из бетона, фибробетона,
                        стеклофибробетона, стеклофиброгипса и композитных материалов.
                    </span>
                </Partner>
            </TextBlock>
        </Article>
    </ >
)

export default Page
