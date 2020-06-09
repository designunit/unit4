import { NextPage } from 'next'
import { Embed } from '../src/components/Embed'
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
                        href: t(`${lang}/volokolamsk`),
                        src: 'https://s.tmshv.com/unit4/volokolamsk-04.jpg',
                        text: t('repository-volokolamsk'),
                    },
                    {
                        href: t(`${lang}/latlng`),
                        src: 'https://s.tmshv.com/unit4/latlng-latlng.gif',
                        text: t('repository-latlng'),
                    },
                    {
                        href: t(`${lang}/edu_ugra`),
                        src: 'https://s.tmshv.com/unit4/edu_ugra-01.jpg',
                        text: t('repository-edu_ugra'),
                    },
                    {
                        href: t(`${lang}/uray_ppi`),
                        src: 'https://s.tmshv.com/unit4/uray_ppi-urai.jpg',
                        text: t('repository-uray_ppi'),
                    },
                    {
                        href: t(`${lang}/heterotopia`),
                        src: 'https://s.tmshv.com/unit4/heterotopia-heterotopia.gif',
                        text: t('repository-heterotopia'),
                    },
                    {
                        href: t(`${lang}/oymyakon`),
                        src: 'https://s.tmshv.com/unit4/oymyakon-viz_gulag.jpg',
                        text: t('repository-oymyakon'),
                    },
                    {
                        href: t(`${lang}/hovrinka`),
                        src: 'https://s.tmshv.com/unit4/hovrinka-hovrinka.jpg',
                        text: t('repository-hovrinka'),
                    },
                    {
                        href: t(`${lang}/delta`),
                        src: 'https://s.tmshv.com/unit4/delta-delta.jpg',
                        text: t('repository-delta'),
                    },
                    {
                        href: t(`${lang}/application_manual`),
                        src: 'https://s.tmshv.com/unit4/app_manual-manual.jpg',
                        text: t('repository-application_manual'),
                    },
                    {
                        href: t(`${lang}/gor_projects_spb`),
                        src: 'https://s.tmshv.com/unit4/gorprojects_spb-project3-todo-after_.jpg',
                        text: t('repository-gor_projects_spb'),
                    },
                    {
                        href: t(`${lang}/yoshkola`),
                        src: 'https://s.tmshv.com/unit4/yoshkola-04.jpg',
                        text: t('repository-yoshkola'),
                    },
                    {
                        href: t(`${lang}/boulevard_scnd`),
                        src: 'https://s.tmshv.com/unit4/boulevard_scnd-boulevard.jpg',
                        text: t('repository-boulevard_scnd'),
                    },
                    {
                        href: t(`${lang}/park_scnd`),
                        src: 'https://s.tmshv.com/unit4/park_scnd-park.jpg',
                        text: t('repository-park_scnd'),
                    },
                    {
                        href: t(`${lang}/shelter`),
                        src: 'https://s.tmshv.com/unit4/shelter-01.jpg',
                        text: t('repository-shelter'),
                    },
                    {
                        href: t(`${lang}/swarm`),
                        src: 'https://s.tmshv.com/unit4/swarm-swarm.jpg',
                        text: t('repository-swarm'),
                    },
                    {
                        href: t(`${lang}/dc_scnd`),
                        src: 'https://s.tmshv.com/unit4/dc_scnd-dc.gif',
                        text: t('repository-dc_scnd'),
                    },
                    {
                        href: t(`${lang}/gb_scnd`),
                        src: 'https://s.tmshv.com/unit4/gb_scnd-gb.jpg',
                        text: t('repository-gb_scnd'),
                    },
                    {
                        href: t(`${lang}/samarapark`),
                        src: 'https://s.tmshv.com/unit4/samarapark-10.jpg',
                        text: t('repository-samarapark'),
                    },
                    {
                        href: t(`${lang}/garagescreen`),
                        src: 'https://s.tmshv.com/unit4/garagescreen-02.gif',
                        text: t('repository-garagescreen'),
                    },
                    {
                        href: t(`${lang}/d_scnd`),
                        src: 'https://s.tmshv.com/unit4/d_scnd-03.jpg',
                        text: t('repository-d_scnd'),
                    },
                    {
                        href: t(`${lang}/krvostok`),
                        src: 'https://s.tmshv.com/unit4/krvostok-01.jpg',
                        text: t('repository-krvostok'),
                    },
                    {
                        href: t(`${lang}/trollgardens`),
                        src: 'https://s.tmshv.com/unit4/trollgardens-05.jpg',
                        text: t('repository-trollgardens'),
                    },
                    {
                        href: t(`${lang}/chistopol2`),
                        src: 'https://s.tmshv.com/unit4/chistopol2-07.jpg',
                        text: t('repository-chistopol2'),
                    },
                    {
                        href: t(`${lang}/kemb`),
                        src: 'https://s.tmshv.com/unit4/kemb-01.jpg',
                        text: t('repository-kemb'),
                    },
                    {
                        href: t(`${lang}/model4`),
                        src: 'https://s.tmshv.com/unit4/model4-01.jpg',
                        text: t('repository-model4'),
                    },
                    {
                        href: t(`${lang}/chistopol`),
                        src: 'https://s.tmshv.com/unit4/chistopol-02.jpg',
                        text: t('repository-chistopol'),
                    },
                ]}
            />
        </>
    )
}

export default withTranslation('common')(Page)
