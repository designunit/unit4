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
                        text: t('repository-edu_ugra'),
                    },
                    {
                        href: '/repository/uray_ppi',
                        src: 'https://unit4.io/files/uray_ppi/urai.jpg',
                        text: t('repository-uray_ppi'),
                    },
                    {
                        href: '/repository/heterotopia',
                        src: 'https://unit4.io/files/heterotopia/heterotopia.gif',
                        text: t('repository-heterotopia'),
                    },
                    {
                        href: '/repository/oymyakon',
                        src: 'https://unit4.io/files/oy/viz_gulag.jpg',
                        text: t('repository-oymyakon'),
                    },
                    {
                        href: '/repository/hovrinka',
                        src: 'https://unit4.io/files/hovrinka/hovrinka.jpg',
                        text: t('repository-hovrinka'),
                    },
                    {
                        href: '/repository/delta',
                        src: 'https://unit4.io/files/delta/delta.jpg',
                        text: t('repository-delta'),
                    },
                    {
                        href: '/repository/application_manual',
                        src: 'https://unit4.io/files/app_manual/manual.jpg',
                        text: t('repository-application_manual'),
                    },
                    {
                        href: '/repository/gor_projects_spb',
                        src: 'https://spb.city4people.ru/static/img_c4p/project3/todo-after_.jpg',
                        text: t('repository-gor_projects_spb'),
                    },
                    {
                        href: '/repository/yoshkola',
                        src: 'https://unit4.io/files/yoshkola/04.jpg',
                        text: t('repository-yoshkola'),
                    },
                    {
                        href: '/repository/boulevard_scnd',
                        src: 'https://unit4.io/files/boulevard_scnd/boulevard.jpg',
                        text: t('repository-boulevard_scnd'),
                    },
                    {
                        href: '/repository/park_scnd',
                        src: 'https://unit4.io/files/park_scnd/park.jpg',
                        text: t('repository-park_scnd'),
                    },
                    {
                        href: '/repository/shelter',
                        src: 'https://unit4.io/files/shelter/01.jpg',
                        text: t('repository-shelter'),
                    },
                    {
                        href: '/repository/swarm',
                        src: 'https://unit4.io/files/swarm/swarm.jpg',
                        text: t('repository-swarm'),
                    },
                    {
                        href: '/repository/dc_scnd',
                        src: 'https://unit4.io/files/dc_scnd/dc.gif',
                        text: t('repository-dc_scnd'),
                    },
                    {
                        href: '/repository/gb_scnd',
                        src: 'https://unit4.io/files/gb_scnd/gb.jpg',
                        text: t('repository-gb_scnd'),
                    },
                    {
                        href: '/repository/samarapark',
                        src: 'https://unit4.io/files/samarapark/10.jpg',
                        text: t('repository-samarapark'),
                    },
                    {
                        href: '/repository/garagescreen',
                        src: 'https://unit4.io/files/garagescreen/02.gif',
                        text: t('repository-garagescreen'),
                    },
                    {
                        href: '/repository/d_scnd',
                        src: 'https://unit4.io/files/d_scnd/03.jpg',
                        text: t('repository-d_scnd'),
                    },
                    {
                        href:  '/repository/krvostok',
                        src: 'https://unit4.io/files/krvostok/01.jpg',
                        text: t('repository-krvostok'),
                    },
                    {
                        href:  '/repository/trollgardens',
                        src: 'https://unit4.io/files/trollgardens/05.jpg',
                        text: t('repository-trollgardens'),
                    },
                    {
                        href:  '/repository/chistopol2',
                        src: 'https://unit4.io/files/chistopol2/07.jpg',
                        text: t('repository-chistopol2'),
                    },
                    {
                        href:  '/repository/kemb',
                        src: 'https://unit4.io/files/kemb/01.jpg',
                        text: t('repository-kemb'),
                    },
                    {
                        href:  '/repository/model4',
                        src: 'https://unit4.io/files/model4/01.jpg',
                        text: t('repository-model4'),
                    },
                    {
                        href:  '/repository/chistopol',
                        src: 'https://unit4.io/files/chistopol/02.jpg',
                        text: t('repository-chistopol'),
                    },
                ]}
            />
        </>
    )
}

export default withTranslation('common')(Page)
