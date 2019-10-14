// tslint:disable: max-line-length

import { NextPage } from 'next'
import Head from 'next/head'
import * as React from 'react'
import { Article } from '../../src/components/Article'
import { Image } from '../../src/components/Image'
import { WideBlock } from '../../src/components/WideBlock'

function useHeterotopiaGradient() {
    const angle = 90
    let colors: Array<[number, string]> = [
        [Math.random(), '#ff00ff'],
        [Math.random(), '#1ac4ff'],
        [Math.random(), '#ff7e00'],
    ]
    colors = colors.sort(() => -1 + Math.random() * 2)
    colors[0][0] = 0
    colors[2][0] = 1

    const gradient = colors
        .map(([value, color]) => `${color} ${value * 100}%`)
    return `linear-gradient(${angle}deg, ${gradient.join(', ')})`
}

const HeterotopiaTitle: React.FC = props => {
    const linearGradient = useHeterotopiaGradient()

    return (
        <h2 style={{
            background: linearGradient,
        }}>
            <style jsx>{`
                h2 {
                    display: inline;

                    font-size: var(--font-h2-size);
                    text-transform: uppercase;
                    padding: 2px 2px;
                    background: rgb(255,0,255);
                }
            `}</style>

            {props.children}
        </h2>
    )
}

const Page: NextPage = () => (
    <>
        <Head><title>ГЕТЕРОТОПИИ СО-ВРЕМЕННОСТИ</title></Head>
        <Article>

            <WideBlock
                style={{
                    textAlign: 'center',
                }}
            >
                <iframe
                    src={'https://tmshv.github.io/popcode/heterotopia/'}
                    width={'80%'}
                    height={'500px'}
                    frameBorder={'no'}
                    scrolling={'no'}
                />
            </WideBlock>

            <style jsx>{`
                b {
                    text-transform: uppercase;
                    margin: 0 2px;
                    color: var(--color-text-opposite);
                    background-color: var(--color-background-opposite);
                }
            `}</style>

            <p>
                Ввиду того, что термин <b>СОВРЕМЕННОСТЬ</b> почти во всех интерпретациях смыслов присвоен философией, эстетикой и архитектурой минувшего века, мы пишем <b>СО-ВРЕМЕННОСТЬ</b>, имея ввиду скользящий во временном потоке фокус рассмотрения, отвечающий на вопросы: «к каким концепциям каких времен восходят наши/мои представления? в какой диспозиции к ним соотносится то, что я делаю или намерен делать?». Термин <b>ГЕТЕРОТОПИЯ</b> мобилизован из лекции Мишеля Фуко. Здесь он означает, что множество времен, проступающих в результатах деятельности, образует сложное неоднородное пространство – своеобразный ландшафт смыслов и материального окружения. Фестиваль Зодчество 2020 – обзор, ментальная карта состояния цеха.
            </p>

            <Image src='https://unit4.io/files/heterotopia/heterotopia_01.jpg' />

            <p>
                Одни проекты призывают настоящее в отрыв в высокотехнологическое будущее, а непричастные сгинут в сингулярности. Другие, отрицая этот отрыв, соревнуются в многоразличных версиях настоящего, какое из них более «настоящее» чем другое. Иные настырно убеждают в том, что как будущее, так и настоящее просто обязано быть высокодуховным, посему необходимо реабилитировать/мобилизовать/наследовать концепции и образы разнодалекого прошлого.
                Все в целом приводит к тому, что в одном – современном нам – времени, да и в едином пространстве сосуществуют, проявляют себя, материализуются концепции из различных времен.
            </p>

            <ul>
                <li>Какое время в нашем наследуют гигантские проектные институты?</li>
                <li>Как в разновременном ландшафте разбросаны новые начинания?</li>
                <li>Какие концепции актуализируют философы и социальные ученые?</li>
            </ul>

            <p>
                <b>ГЕТЕРОТОПИИ СО-ВРЕМЕННОСТИ</b> – картина российского цехового ландшафта в наступившем веке – где разрывы, где связности/ядра/пузыри/облака и как вся картина анимируется – от какого к какому состоянию она движется.
            </p>

            <Image src='https://unit4.io/files/heterotopia/heterotopia_02.jpg' />

            <HeterotopiaTitle>тематика экспозиционной части</HeterotopiaTitle>
            <ul>
                <li>Образ будущего в настоящем</li>
                <li>Образ будущего в прошедшем</li>
                <li>Образ настоящего в будущем</li>
                <li>Образ настоящего в прошедшем</li>
                <li>Образ прошлого в будущем</li>
                <li>Образ прошлого в настоящем</li>
            </ul>

            <HeterotopiaTitle>тематика событийной части</HeterotopiaTitle>
            <ul>
                <li>Конец просвещения / Фигура мастера</li>
                <li>Новые х 10</li>
                <li>Наследие / Футуроцид / Антропоцен</li>
                <li>Социально-культурное проектирование / Жизнеустойчивость</li>
                <li>Российская архитектура за рубежом / Зарубежная архитектура в России</li>
                <li>Архитектура и медиа</li>
                <li>Архитектура цифровой эпохи / Архитектура вне архитектуры / Архитектура как наука</li>
                <li>Обучение проектированию: школы / курсы / секты</li>
            </ul>

            <Image src='https://unit4.io/files/heterotopia/heterotopia_03.jpg' />

            <HeterotopiaTitle>Все доступное пространство подразделяется на четыре зоны:</HeterotopiaTitle>
            <ul>
                <li>кураторская экспозиция/детская зона/залы - центральный каньон, тканевая инсталляция, общая площадь 1000 м2</li>
                <li>мастерские/регионы/конкурсы - картонные ребристые панели, общая площадь 1150 м2</li>
                <li>коммерческая экспозиция - картонные ребристые панели, общая площадь 200 м2</li>
                <li>дирекция фестиваля - общая площадь 80 м2</li>
            </ul>
        </Article>
    </>
)

export default Page
