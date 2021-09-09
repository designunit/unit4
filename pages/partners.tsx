import { Partner } from '../src/components/Partner'
import { TextBlock } from '../src/components/TextBlock'
import { Title } from '../src/components/Title'

const Page = () => (
    <>
        <Title>ПАРТНЕРЫ</Title>

        <Partner
            href='http://www.mlaplus.com/'
            title='www.mlaplus.com'
            src='/static/logo_mla.svg'
        >
            <TextBlock>
                Архитектура, градостроительство, консалтинг.
            </TextBlock>
        </Partner>

        <Partner
            href='https://gorsreda86.ugraces.ru/'
            title='www.knappt.com'
            src='/static/HMAO_logo_bw.svg'
            imageWidth={300}
        >
            <TextBlock>
                Центр компетенций по вопросам городской среды
                Ханты-Мансийского автономного округа - Югры.
            </TextBlock>
        </Partner>

        <Partner
            href='http://urbanica.spb.ru/'
            title='urbanica.spb.ru'
            src='/static/urbanica_logo.svg'
            imageWidth={400}
        >
            <TextBlock>
                Институт территориального планирования Урбаника.
                <br />
                Cпециализируется на градостроительном проектированиии и консалтинге.
            </TextBlock>
        </Partner>

        <Partner
            href='http://www.knappt.com/'
            title='www.knappt.com'
            src='/static/logo_knappt.svg'
        >
            <TextBlock>
                Проектируют и производят изделия из бетона, фибробетона,
                стеклофибробетона, стеклофиброгипса и композитных материалов.
            </TextBlock>
        </Partner>
    </>
)

export default Page
