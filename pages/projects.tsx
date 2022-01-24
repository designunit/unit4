import { GetStaticProps, NextPage } from 'next'
import { Gallery } from '../src/components/Gallery'
import { Title } from '../src/components/Title'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { GalleryItem, IGalleryItemProps } from '@/components/Gallery/GalleryItem'
import { getPageBySlug } from '@/api'

const projects: { href: string, size?: 1 | 2 | 4 , relativeSrc?: boolean}[] = [
    {
        href: '/bereguray',
        size: 4,
        relativeSrc: true,
    },
    {
        href: '/perm',
        size: 2,
    },
    {
        href: '/pitkyaranta',
        size: 1,
    },
    {
        href: '/epischool',
        size: 1,
    },
    {
        href: '/derbent',
        size: 4,
    },
    {
        href: '/kandelaki',
        size: 2,
    },
    {
        href: '/zapolyarniy',
        size: 2,
    },
    {
        href: '/sisu',
        size: 2,
    },
    {
        href: '/nyagan',
        size: 2,
    },
    {
        href: '/volokolamsk',
        size: 4,
    },
    {
        href: '/latlng',
    },
    {
        href: '/ugra-edu',
    },
    {
        href: '/uray-ppi',
    },
    {
        href: '/heterotopia',
    },
    {
        href: '/oymyakon',
    },
    {
        href: '/hovrinka',
    },
    {
        href: '/delta',
    },
    {
        href: '/application-manual',
    },
    {
        href: '/gorprojects-spb',
    },
    {
        href: '/yoshkola',
    },
    {
        href: '/scnd-boulevard',
    },
    {
        href: '/scnd-park',
    },
    {
        href: '/shelter',
    },
    {
        href: '/swarm',
    },
    {
        href: '/scnd-dc',
    },
    {
        href: '/scnd-gb',
    },
    {
        href: '/samarapark',
    },
    {
        href: '/garagescreen',
    },
    {
        href: '/scnd-d',
    },
    {
        href: '/krvostok',
    },
    {
        href: '/trollgardens',
    },
    {
        href: '/chistopol2',
    },
    {
        href: '/kemb',
    },
    {
        href: '/model4',
    },
    {
        href: '/chistopol',
    }
]

interface IPageProps {
    data: Partial<IGalleryItemProps>[]
}

const Page: NextPage<IPageProps> = ({ data }) => {
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
                {data.map((x, i) => {
                    const indexCycled = (i + 4) % 6 // +4 should be removed, its a hack
                    let autosize: 1 | 2 | 4 = 4
                    switch (indexCycled) {
                        case 0:
                            autosize = 4
                            break
                        case 1:
                        case 2:
                            autosize = 1
                            break
                        case 3:
                        case 4:
                        case 5:
                            autosize = 2
                            break
                        default:
                            break
                    }
                    return (
                        <GalleryItem
                            key={x.href}
                            src={x.src}
                            text={x.text}
                            tags={x.tags.map(tag => t(tag, { ns: 'tags' }))}
                            href={x.href}
                            size={x?.size ?? autosize}
                            mode={'projects'}
                            relativeSrc={x.relativeSrc}
                        />
                    )
                })}
            </Gallery>
        </>
    )
}

export const getStaticProps: GetStaticProps<IPageProps> = async ctx => {
    const pages = await Promise.all(projects.map(async x => getPageBySlug(ctx.locale, x.href)))
    const data = projects.map((x, i) => {
        const page = pages[i]
        const src = page?.cover ?? null
        const text = page?.title ?? null
        const tags = [
            ...(page?.location ? [page?.location] : []),
            ...(page?.year ? [page?.year] : []),
            ...page?.tags ?? []
        ]
        return {
            ...x,
            src,
            text,
            tags,
        }
    })


    return {
        props: {
            data,
        }
    }
}
export default Page
