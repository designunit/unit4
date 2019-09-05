import * as React from 'react'

import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import { WideBlock } from '../../src/components/WideBlock'

import {
    sankeyDataStage1,
    sankeyDataStage2,
    sankeyDataStage3,
} from '../../src/app/oymyakon/data'
import { defaultColorSet } from '../../src/app/oymyakon/dataviz'
// import Sankey from '../../src/components/Dataviz/Sankey'

const Sankey = dynamic(() => import('../../src/components/Dataviz/Sankey'), {
    ssr: false,
})

// import '../src/style.css'

interface IPageProps {
    layout: string
    className?: string
}

const Page: NextPage<IPageProps> = props => {
    const sankeyAspectRatio = 2.5
    const sankeyStyle = {
        backgroundColor: 'white',
        color: 'black',
        marginBottom: 50,
        padding: 10,
    }

    return (
        <main className={props.className}>
            <style jsx>{`
                main {
                    display: flex;
                    justify-content: center;
                }

                .wrapper {
                    width: 90%;
                }

                .dataviz-block {
                    display: flex;
                    flex-direction: column;

                    margin-bottom: var(--margin-s);
                }

                .dataviz-block section {
                    flex: 1;
                    padding-bottom: var(--margin-m);
                }
            `}</style>

            <div className={'wrapper'}>

                <Head>
                    <title>ОЙМЯКОН : : сценарии стратегии</title>
                </Head>

                <h1>ОЙМЯКОН : : сценарии стратегии</h1>

                <div className={'dataviz-block'}>
                    <h3>ФАЗА ЗАПУСКА</h3>
                    <WideBlock>
                        <Sankey
                            containerAspectRatio={sankeyAspectRatio}
                            showLegend={false}
                            style={sankeyStyle}
                            data={sankeyDataStage1}
                            defaultColorSet={defaultColorSet}
                        />
                    </WideBlock>

                    <section>

                        <p>
                            Cочетает компоненты слабого сценария с начинаниями из сильного.
                        </p>

                        <p>
                            В этой фазе важно повысить доступность стартовых пунктов сети, информируемость прибывающих, разместить основные типы объектов сети в стартовых пунктов сети и запустить в упредительном порядке сертификацию ключевых компонентов следующей фазы.
                            Посредством понтонов повышается доступность внутри сел и наиболее часто затапливаемых сегментов маршрутов. В ключевых пунктах размещаются сьюты и резиденции. В селах размещаются юниты - гостевые модули на участках добровольно согласившихся существующих домохозяйств, располагающих их к автономному ресурсообеспечению. Строятся гостевые центры в Теплом ключе и Томторе - обозначить ворота в проект. При непосредственном содействии проектного офиса запускаются процессы сертификации грузопассажирских дирижаблей и дизельэлектрических автономных грузопассажирских болотоходов.
                        </p>

                        <p>
                            Фаза запуска лишь обозначает начало изменений, информирует об их характере и перспективах, что в каких целях делается.
                        </p>
                    </section>
                </div>

                <div className={'dataviz-block'}>
                    <h3>ФАЗА ЗРЕЛОСТИ</h3>
                    <WideBlock>
                        <Sankey
                            containerAspectRatio={sankeyAspectRatio}
                            showLegend={false}
                            style={sankeyStyle}
                            data={sankeyDataStage2}
                            defaultColorSet={defaultColorSet}
                        />
                    </WideBlock>
                    <section>
                        <p>
                            Реализует компоненты сильного сценария, закладывает основы перехода к целевому.
                        </p>

                        <p>
                            В этой фазе важно расширить топологию сети и укрепить разнообразие предложения. Ширится сеть доступных маршрутов (сьютов и резиденций в них), артикулируется их тематика. Наиболее удаленные маршруты укрепляются шелтерами - можно переходить к разнообразию средств мобильности. Тестируются отдельные маршруты пассажирских дирижаблей. Тестируются отдельные маршруты снабжения - грузовые воздушными и наземными дронами (Snowbusами). Также в селах появляются тимптоны - демонстрационная новая жилая энерго-ресурсо-эффективная застройка (на демонстрационном этапе туристы и исследователи могут занимать эти дома на время своего присутствия). Гостевой центр Теплый ключ запускает: программу привлечения академических туров в поездки и резиденции, программу тестирования технологических инноваций в экстремальных условиях и привлечения технологических стартапов, программу привлечения социальных и экологических исследований, открывает малые инновационные предприятия.
                        </p>
                    </section>
                </div>

                <div className={'dataviz-block'}>
                    <h3>ЦЕЛЕВОЙ СЦЕНАРИЙ</h3>
                    <WideBlock>
                        <Sankey
                            containerAspectRatio={sankeyAspectRatio}
                            showLegend={false}
                            style={sankeyStyle}
                            data={sankeyDataStage3}
                            defaultColorSet={defaultColorSet}
                        />
                    </WideBlock>
                    <section>
                        <p>
                            В целевом сценарии практически все гостевые центры функционируют как научно-исследовательские резиденции. Основное снабжение осуществляется грузовыми воздушными дронами. Срочное пассажирское сообщение осуществляется пассажирскими воздушными дронами и электромоторной малой авиацией. Регулярное рейсовое пассажирское сообщение осуществляется пассажирскими дирижаблями и наземными пассажирскими дронами. Рейсовые дирижабли и наземные дроны также регулярно перевозят товары, продукты, материалы и отходы. Наземные дроны в комплектации мобильный съют при поддержке грузовых воздушных дронов осуществляют отдаленные гостевые и научные экспедиции.
                        </p>

                        <p>
                            Из специфически туристской инфраструктуры гости используют ландшафтные отели, съюты, юниты и шелтеры, кэмпы, коней, прокат туристского снаряжения и мобильные съюты. В остальном они используют гражданскую инфраструктуру - средства доступа, тимптоны - демонстрационные дома новой застройки в селах. также гости разделяют с научной деятельностью общие инфраструктуры - резиденции, съюты, шелтеры, дирижабли, дроны снабжения.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}

Page.getInitialProps = async () => ({
    className: 'oymyakon',
    layout: 'none',
})

export default Page
