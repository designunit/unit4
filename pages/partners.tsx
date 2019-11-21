import { NextPage } from 'next'
import * as React from 'react'
import { Article } from '../src/components/Article'
import { Partner } from '../src/components/Partner'
import { TextBlock } from '../src/components/TextBlock'
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
                >
                    <span>
                        Архитектура, градостроительство, консалтинг.
                    </span>
                </Partner>

                <Partner
                    href='https://gorsreda86.ugraces.ru/'
                    title='www.knappt.com'
                    src='/static/HMAO_logo_bw.svg'
                    imageWidth={300}
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
                    imageWidth={400}
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
