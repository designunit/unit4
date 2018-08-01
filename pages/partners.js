import react from 'react'
import DefaultLayout from '../components/DefaultLayout';
import Title from '../components/Title';
import TextBlock from '../components/TextBlock';
import Contact from '../components/Contact';

export default () => (
    <DefaultLayout>
    
            <Title>ПАРТНЕРЫ</Title>

            <TextBlock>
                <div className="logo-partners">
                    <a href="http://www.mlaplus.com/" target="_blank" title="www.mlaplus.com">
                        <img src="/static/logo_mla+.svg" height="22px" />
                    </a>
                </div>

                <div className="logo-partners">
                    <a href="http://www.knappt.com/" target="_blank" title="www.knappt.com">
                        <img src="/static/logo_knappt.svg" height="30px" />
                    </a>
                </div>

                <div className="logo-partners">
                    <a href="https://vk.com/divometallspb" target="_blank" title="vk.com/divometallspb">
                        <img src="/static/logo_divo_metall.svg" height="30px" />
                    </a>
                </div>
            </TextBlock>
    
    </DefaultLayout>
)