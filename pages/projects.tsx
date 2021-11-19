import { GetStaticProps, NextPage } from 'next'
import { Gallery } from '../src/components/Gallery'
import { Title } from '../src/components/Title'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { GalleryItem } from '@/components/Gallery/GalleryItem'

const projects: {
    href: string;
    size: 1 | 2 | 4;
}[] = [
        {
            'href': '/volokolamsk',
            'size': 4
        },
        {
            'href': '/latlng',
            'size': 1
        },
        {
            'href': '/ugra-edu',
            'size': 1
        },
        {
            'href': '/uray-ppi',
            'size': 2
        },
        {
            'href': '/heterotopia',
            'size': 2
        },
        {
            'href': '/oymyakon',
            'size': 2
        },
        {
            'href': '/hovrinka',
            'size': 4
        },
        {
            'href': '/delta',
            'size': 1
        },
        {
            'href': '/application-manual',
            'size': 1
        },
        {
            'href': '/gorprojects-spb',
            'size': 2
        },
        {
            'href': '/yoshkola',
            'size': 2
        },
        {
            'href': '/scnd-boulevard',
            'size': 2
        },
        {
            'href': '/scnd-park',
            'size': 4
        },
        {
            'href': '/shelter',
            'size': 1
        },
        {
            'href': '/swarm',
            'size': 1
        },
        {
            'href': '/scnd-dc',
            'size': 2
        },
        {
            'href': '/scnd-gb',
            'size': 2
        },
        {
            'href': '/samarapark',
            'size': 2
        },
        {
            'href': '/garagescreen',
            'size': 4
        },
        {
            'href': '/scnd-d',
            'size': 1
        },
        {
            'href': '/krvostok',
            'size': 1
        },
        {
            'href': '/trollgardens',
            'size': 2
        },
        {
            'href': '/chistopol2',
            'size': 2
        },
        {
            'href': '/kemb',
            'size': 2
        },
        {
            'href': '/model4',
            'size': 4
        },
        {
            'href': '/chistopol',
            'size': 1
        }
    ]

interface IPageProps {
    projects: {
        href: string;
        size: 1 | 2 | 4;
    }[]
}

const Page: NextPage<IPageProps> = ({ projects }) => {
    const { t } = useTranslation()

    return (
        <>
            <div style={{
                position: 'relative',
                padding: 'var(--content-padding)',
                paddingLeft: 0,
                paddingTop: '2rem',
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
            >
                {projects.map(x => (
                    <GalleryItem
                        key={x.href}
                        href={x.href}
                        size={x.size}
                        mode={'projects'}
                    />
                ))}
            </Gallery>
        </>
    )
}

export const getStaticProps: GetStaticProps<IPageProps> = async () => {
    return {
        props: {
            projects,
        }
    }
}
export default Page