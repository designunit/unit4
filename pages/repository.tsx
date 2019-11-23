import * as React from 'react'

import { NextPage } from 'next'

import { Gallery } from '../src/components/Gallery'
import { Title } from '../src/components/Title'
import { useLangUrlPrefix } from '../src/hooks/useLangUrlPrefix'
import { useTranslation, withTranslation } from '../src/i18n'

const Page: NextPage = () => {
    const { t } = useTranslation()
    const lang = useLangUrlPrefix()

    return (
        <>
            <Title>{t('Repository')}</Title>

            <Gallery
                style={{
                    marginBottom: 50,
                }}
                items={[
                    {
                        href: t(`${lang}/repository/edu_ugra`),
                        src: 'https://unit4.io/files/edu_ugra/01.jpg',
                        text: t('repository-edu_ugra'),
                    },
                    {
                        href: t(`${lang}/repository/uray_ppi`),
                        src: 'https://unit4.io/files/uray_ppi/urai.jpg',
                        text: t('repository-uray_ppi'),
                    },
                    {
                        href: t(`${lang}/repository/heterotopia`),
                        src: 'https://unit4.io/files/heterotopia/heterotopia.gif',
                        text: t('repository-heterotopia'),
                    },
                    {
                        href: t(`${lang}/repository/oymyakon`),
                        src: 'https://unit4.io/files/oy/viz_gulag.jpg',
                        text: t('repository-oymyakon'),
                    },
                    {
                        href: t(`${lang}/repository/hovrinka`),
                        src: 'https://unit4.io/files/hovrinka/hovrinka.jpg',
                        text: t('repository-hovrinka'),
                    },
                    {
                        href: t(`${lang}/repository/delta`),
                        src: 'https://unit4.io/files/delta/delta.jpg',
                        text: t('repository-delta'),
                    },
                    {
                        href: t(`${lang}/repository/application_manual`),
                        src: 'https://unit4.io/files/app_manual/manual.jpg',
                        text: t('repository-application_manual'),
                    },
                    {
                        href: t(`${lang}/repository/gor_projects_spb`),
                        src: 'https://spb.city4people.ru/static/img_c4p/project3/todo-after_.jpg',
                        text: t('repository-gor_projects_spb'),
                    },
                    {
                        href: t(`${lang}/repository/yoshkola`),
                        src: 'https://unit4.io/files/yoshkola/04.jpg',
                        text: t('repository-yoshkola'),
                    },
                    {
                        href: t(`${lang}/repository/boulevard_scnd`),
                        src: 'https://unit4.io/files/boulevard_scnd/boulevard.jpg',
                        text: t('repository-boulevard_scnd'),
                    },
                    {
                        href: t(`${lang}/repository/park_scnd`),
                        src: 'https://unit4.io/files/park_scnd/park.jpg',
                        text: t('repository-park_scnd'),
                    },
                    {
                        href: t(`${lang}/repository/shelter`),
                        src: 'https://unit4.io/files/shelter/01.jpg',
                        text: t('repository-shelter'),
                    },
                    {
                        href: t(`${lang}/repository/swarm`),
                        src: 'https://unit4.io/files/swarm/swarm.jpg',
                        text: t('repository-swarm'),
                    },
                    {
                        href: t(`${lang}/repository/dc_scnd`),
                        src: 'https://unit4.io/files/dc_scnd/dc.gif',
                        text: t('repository-dc_scnd'),
                    },
                    {
                        href: t(`${lang}/repository/gb_scnd`),
                        src: 'https://unit4.io/files/gb_scnd/gb.jpg',
                        text: t('repository-gb_scnd'),
                    },
                    {
                        href: t(`${lang}/repository/samarapark`),
                        src: 'https://unit4.io/files/samarapark/10.jpg',
                        text: t('repository-samarapark'),
                    },
                    {
                        href: t(`${lang}/repository/garagescreen`),
                        src: 'https://unit4.io/files/garagescreen/02.gif',
                        text: t('repository-garagescreen'),
                    },
                    {
                        href: t(`${lang}/repository/d_scnd`),
                        src: 'https://unit4.io/files/d_scnd/03.jpg',
                        text: t('repository-d_scnd'),
                    },
                    {
                        href: t(`${lang}/repository/krvostok`),
                        src: 'https://unit4.io/files/krvostok/01.jpg',
                        text: t('repository-krvostok'),
                    },
                    {
                        href: t(`${lang}/repository/trollgardens`),
                        src: 'https://unit4.io/files/trollgardens/05.jpg',
                        text: t('repository-trollgardens'),
                    },
                    {
                        href: t(`${lang}/repository/chistopol2`),
                        src: 'https://unit4.io/files/chistopol2/07.jpg',
                        text: t('repository-chistopol2'),
                    },
                    {
                        href: t(`${lang}/repository/kemb`),
                        src: 'https://unit4.io/files/kemb/01.jpg',
                        text: t('repository-kemb'),
                    },
                    {
                        href: t(`${lang}/repository/model4`),
                        src: 'https://unit4.io/files/model4/01.jpg',
                        text: t('repository-model4'),
                    },
                    {
                        href: t(`${lang}/repository/chistopol`),
                        src: 'https://unit4.io/files/chistopol/02.jpg',
                        text: t('repository-chistopol'),
                    },
                ]}
            />
        </>
    )
}

export default withTranslation('common')(Page)
