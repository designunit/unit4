import { NextPage } from 'next'
import { Gallery } from '../src/components/Gallery'
import { Title } from '../src/components/Title'
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'
import { ProjectsSelector } from '@/components/ProjectsSelector'
import { indexOf } from 'lodash'

export const projects = [
    {
        href: '/volokolamsk',
        src: 'https://s.tmshv.com/unit4/volokolamsk-04.jpg',
        text: 'volokolamsk',
    },
    {
        href: '/latlng',
        src: 'https://s.tmshv.com/unit4/latlng-latlng.gif',
        text: 'latlng',
    },
    {
        href: '/ugra-edu',
        src: 'https://s.tmshv.com/unit4/edu_ugra-01.jpg',
        text: 'edu_ugra',
    },
    {
        href: '/uray-ppi',
        src: 'https://s.tmshv.com/unit4/uray_ppi-urai.jpg',
        text: 'uray_ppi',
    },
    {
        href: '/heterotopia',
        src: 'https://s.tmshv.com/unit4/heterotopia-heterotopia.gif',
        text: 'heterotopia',
    },
    {
        href: '/oymyakon',
        src: 'https://s.tmshv.com/unit4/oymyakon-viz_gulag.jpg',
        text: 'oymyakon',
    },
    {
        href: '/hovrinka',
        src: 'https://s.tmshv.com/unit4/hovrinka-hovrinka.jpg',
        text: 'hovrinka',
    },
    {
        href: '/delta',
        src: 'https://s.tmshv.com/unit4/delta-delta.jpg',
        text: 'delta',
    },
    {
        href: '/application-manual',
        src: 'https://s.tmshv.com/unit4/app_manual-manual.jpg',
        text: 'application_manual',
    },
    {
        href: '/gorprojects-spb',
        src: 'https://s.tmshv.com/unit4/gorprojects_spb-project3-todo-after_.jpg',
        text: 'gor_projects_spb',
    },
    {
        href: '/yoshkola',
        src: 'https://s.tmshv.com/unit4/yoshkola-04.jpg',
        text: 'yoshkola',
    },
    {
        href: '/scnd-boulevard',
        src: 'https://s.tmshv.com/unit4/boulevard_scnd-boulevard.jpg',
        text: 'boulevard_scnd',
    },
    {
        href: '/scnd-park',
        src: 'https://s.tmshv.com/unit4/park_scnd-park.jpg',
        text: 'park_scnd',
    },
    {
        href: '/shelter',
        src: 'https://s.tmshv.com/unit4/shelter-01.jpg',
        text: 'shelter',
    },
    {
        href: '/swarm',
        src: 'https://s.tmshv.com/unit4/swarm-swarm.jpg',
        text: 'swarm',
    },
    {
        href: '/scnd-dc',
        src: 'https://s.tmshv.com/unit4/dc_scnd-dc.gif',
        text: 'dc_scnd',
    },
    {
        href: '/scnd-gb',
        src: 'https://s.tmshv.com/unit4/gb_scnd-gb.jpg',
        text: 'gb_scnd',
    },
    {
        href: '/samarapark',
        src: 'https://s.tmshv.com/unit4/samarapark-10.jpg',
        text: 'samarapark',
    },
    {
        href: '/garagescreen',
        src: 'https://s.tmshv.com/unit4/garagescreen-02.gif',
        text: 'garagescreen',
    },
    {
        href: '/scnd-d',
        src: 'https://s.tmshv.com/unit4/d_scnd-03.jpg',
        text: 'd_scnd',
    },
    {
        href: '/krvostok',
        src: 'https://s.tmshv.com/unit4/krvostok-01.jpg',
        text: 'krvostok',
    },
    {
        href: '/trollgardens',
        src: 'https://s.tmshv.com/unit4/trollgardens-05.jpg',
        text: 'trollgardens',
    },
    {
        href: '/chistopol2',
        src: 'https://s.tmshv.com/unit4/chistopol2-07.jpg',
        text: 'chistopol2',
    },
    {
        href: '/kemb',
        src: 'https://s.tmshv.com/unit4/kemb-01.jpg',
        text: 'kemb',
    },
    {
        href: '/model4',
        src: 'https://s.tmshv.com/unit4/model4-01.jpg',
        text: 'model4',
    },
    {
        href: '/chistopol',
        src: 'https://s.tmshv.com/unit4/chistopol-02.jpg',
        text: 'chistopol',
    },
]

const tags = [
    'все',
    'конкурсы',
    'эскизы',
    'тег в три слова',
    'жопа',
]

const Page: NextPage = () => {
    const { t } = useTranslation()

    const [tag, setTag] = useState(tags[0])

    const galleryItems = projects
        // .filter((x: any, index) => tag === tags[0] ? true : (
        //     index % (indexOf(tags, tag) + 1) == 0
        // ))
        .map((x: any) => ({
            ...x,
            text: t(x.text, { ns: 'projects' }),
        }))

    return (
        <>
            <div style={{
                position: 'relative',
                padding: 'var(--content-padding)',
                paddingLeft: 0,
            }}>
                <Title>{t('Repository')}</Title>

                {/* <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}>
                    <ProjectsSelector
                        setTag={setTag}
                        tags={tags}
                        selected={tag}
                    />
                </div> */}
            </div>

            <Gallery
                mode='projects'
                style={{
                    marginBottom: 50,
                }}
                items={galleryItems}
            />
        </>
    )
}

// export const getStaticProps: GetStaticProps = async () => {
// export const setServerSideProps: GetServerSideProps = async () => {
//     return {
//         props: {
//             namespacesRequired: ['common'],
//         }
//     }
// }

// export default withTranslation('common')(Page)
export default Page