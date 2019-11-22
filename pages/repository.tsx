import * as React from 'react'

import { NextPage } from 'next'

import { Gallery } from '../src/components/Gallery'
import { Title } from '../src/components/Title'
import { useTranslation, withTranslation } from '../src/i18n'

const Page: NextPage = () => {
    const { t } = useTranslation()

    return (
        <>
            <Title>{t('Repository')}</Title>

            <Gallery
                style={{
                    marginBottom: 50,
                }}
                items={[
                    {
                        href: '/repository/edu_ugra',
                        src: 'https://unit4.io/files/edu_ugra/01.jpg',
                        text: 'ОБУЧАЮЩИЙ СЕМИНАР ХМАО ФКГС',
                    },
                    {
                        href: '/repository/uray_ppi',
                        src: 'https://unit4.io/files/uray_ppi/urai.jpg',
                        text: 'ИССЛЕДОВАНИЕ УРАЙ ХМАО',
                    },
                    {
                        href: '/repository/heterotopia',
                        src: 'https://unit4.io/files/heterotopia/heterotopia.gif',
                        text: 'ГЕТЕРОТОПИИ СО-ВРЕМЕННОСТИ',
                    },
                    {
                        href: '/repository/oymyakon',
                        src: 'https://unit4.io/files/oy/viz_gulag.jpg',
                        text: 'ОЙМЯКОН п(о)люс со-временности',
                    },
                    {
                        href: '/repository/hovrinka',
                        src: 'https://unit4.io/files/hovrinka/hovrinka.jpg',
                        text: 'СОЦИАЛЬНО-КУЛЬТУРНЫЙ ЦЕНТР ХОВРИНКА',
                    },
                    {
                        href: '/repository/delta',
                        src: 'https://unit4.io/files/delta/delta.jpg',
                        text: 'БЛАГОУСТРОЙСТВО ЖК COMCITY МОСКВА',
                    },
                    {
                        href: '/repository/application_manual',
                        src: 'https://unit4.io/files/app_manual/manual.jpg',
                        text: 'МЕТОДИЧЕСКИЕ РЕКОМЕНДАЦИИ ХМАО',
                    },
                    {
                        href: '/repository/gor_projects_spb',
                        src: 'https://spb.city4people.ru/static/img_c4p/project3/todo-after_.jpg',
                        text: 'КОНЦЕПЦИИ spb.city4people.ru',
                    },
                    {
                        href: '/repository/yoshkola',
                        src: 'https://unit4.io/files/yoshkola/04.jpg',
                        text: 'IT ШКОЛА ЙОШКАР-ОЛА',
                    },
                    {
                        href: '/repository/boulevard_scnd',
                        src: 'https://unit4.io/files/boulevard_scnd/boulevard.jpg',
                        text: 'БУЛЬВАР ЖИЛОГО РАЙОНА СКАНДИНАВИЯ',
                    },
                    {
                        href: '/repository/park_scnd',
                        src: 'https://unit4.io/files/park_scnd/park.jpg',
                        text: 'ПАРК ЖИЛОГО РАЙОНА СКАНДИНАВИЯ',
                    },
                    {
                        href: '/repository/shelter',
                        src: 'https://unit4.io/files/shelter/01.jpg',
                        text: 'ИНСТАЛЛЯЦИЯ NEST WIND SHELTER',
                    },
                    {
                        href: '/repository/swarm',
                        src: 'https://unit4.io/files/swarm/swarm.jpg',
                        text: 'МОДЕЛИРОВАНИЕ ПЕШЕХОДНЫХ ПОТОКОВ SWARM',
                    },
                    {
                        href: '/repository/dc_scnd',
                        src: 'https://unit4.io/files/dc_scnd/dc.gif',
                        text: 'ДИЗАЙН-КОД ОТКРЫТЫХ ГОРОДСКИХ ПРОСТРАНСТВ',
                    },
                    {
                        href: '/repository/gb_scnd',
                        src: 'https://unit4.io/files/gb_scnd/gb.jpg',
                        text: 'КОНЦЕПЦИЯ ОТКРЫТЫХ ГОРОДСКИХ ПРОСТРАНСТВ',
                    },
                    {
                        href: '/repository/samarapark',
                        src: 'https://unit4.io/files/samarapark/10.jpg',
                        text: 'ПАРК ЗАГОРОДНЫЙ САМАРА',
                    },
                    {
                        href: '/repository/garagescreen',
                        src: 'https://unit4.io/files/garagescreen/02.gif',
                        text: 'GARAGE SCREEN COMPETITION',
                    },
                    {
                        href: '/repository/d_scnd',
                        src: 'https://unit4.io/files/d_scnd/03.jpg',
                        text: 'ДВОРЫ ЖИЛОГО РАЙОНА СКАНДИНАВИЯ',
                    },
                    {
                        href:  '/repository/krvostok',
                        src: 'https://unit4.io/files/krvostok/01.jpg',
                        text: 'КОНЦЕПЦИЯ БЛАГОУСТРОЙСТВА ЗАВОДА КРАСНЫЙ ВОСТОК',
                    },
                    {
                        href:  '/repository/trollgardens',
                        src: 'https://unit4.io/files/trollgardens/05.jpg',
                        text: 'САДЫ ТРОЛЛЕЙ',
                    },
                    {
                        href:  '/repository/chistopol2',
                        src: 'https://unit4.io/files/chistopol2/07.jpg',
                        text: 'БУЛЬВАР ЧИСТОПОЛЬ ТАТАРСТАН ФАЗА #2',
                    },
                    {
                        href:  '/repository/kemb',
                        src: 'https://unit4.io/files/kemb/01.jpg',
                        text: 'ИССЛЕДОВАНИЕ НАБЕРЕЖНОЙ КАРПОВКИ',
                    },
                    {
                        href:  '/repository/model4',
                        src: 'https://unit4.io/files/model4/01.jpg',
                        text: 'СЕРИЯ ИЗДЕЛИЙ МОДЕЛЬ : : 4',
                    },
                    {
                        href:  '/repository/chistopol',
                        src: 'https://unit4.io/files/chistopol/02.jpg',
                        text: 'БУЛЬВАР ЧИСТОПОЛЬ ТАТАРСТАН ФАЗА #1',
                    },
                ]}
            />
        </>
    )
}

export default withTranslation('common')(Page)
