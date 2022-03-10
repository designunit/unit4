import { GetStaticProps, NextPage } from 'next'
import { Gallery } from '@/components/Gallery'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { GalleryItem, IGalleryItemProps } from '@/components/Gallery/GalleryItem'
import { getPageBySlug } from '@/api'
import { IndexLines } from '@/components/IndexLines'

const projects: { href: string, size?: 1 | 2 | 4, relativeSrc?: boolean }[] = [
    {
        href: '/mesto',
        size: 2,
    },
    {
        href: '/perm',
        size: 2,
    },
    {
        href: '/mur-shmidta',
        size: 4,
    },
    {
        href: '/volkhov',
        size: 2,
    },
    {
        href: '/sisu',
        size: 2,
    },
    {
        href: '/v-tura',
        size: 2,
    },
    {
        href: '/pitkyaranta',
        size: 2,
    },
    {
        href: '/derbent',
        size: 4,
    },
    {
        href: '/zapolyarniy',
        size: 1,
    },
    {
        href: '/gyumri',
        size: 1,
    },
    {
        href: '/kandelaki',
        size: 2,
    },
    {
        href: '/bereguray',
        size: 2,
    },
    {
        href: '/sreda800',
        size: 2,
    },
    {
        href: '/nyagan',
        size: 4,
    },
    {
        href: '/epischool',
        size: 2,
    },
    {
        href: '/parnas',
        size: 1,
    },
    {
        href: '/whatever',
        size: 1,
    },
    {
        href: '/krasnokamsk',
        size: 1,
    },
    {
        href: '/heterotopia',
        size: 1,
    },
    {
        href: '/ugra-edu',
        size: 2,
    },
    {
        href: '/volokolamsk',
        size: 4,
    },
    {
        href: '/uray-ppi',
        size: 2,
    },
    {
        href: '/delta',
        size: 2,
    },
    {
        href: '/hovrinka',
        size: 1,
    },
    {
        href: '/gorprojects-spb',
        size: 1,
    },
    {
        href: '/application-manual',
        size: 2,
    },
    {
        href: '/oymyakon',
        size: 4,
    },
    {
        href: '/yoshkola',
        size: 2,
    },
    {
        href: '/scnd-boulevard',
        size: 1,
    },
    {
        href: '/scnd-park',
        size: 1,
    },
    {
        href: '/shelter',
        size: 1,
    },
    {
        href: '/swarm',
        size: 1,
    },
    {
        href: '/scnd-dc',
        size: 2,
    },
    {
        href: '/scnd-gb',
        size: 4,
    },
    {
        href: '/samarapark',
        size: 2,
    },
    {
        href: '/scnd-d',
        size: 2,
    },
    {
        href: '/garagescreen',
        size: 1,
    },
    {
        href: '/krvostok',
        size: 1,
    },
    {
        href: '/chistopol2',
        size: 2,
    },
    {
        href: '/trollgardens',
        size: 4,
    },
    {
        href: '/kemb',
        size: 2,
    },
    {
        href: '/model4',
        size: 2,
    },
    {
        href: '/chistopol',
        size: 2,
    }
]

interface IPageProps {
    data: Partial<IGalleryItemProps>[]
}

const Page: NextPage<IPageProps> = ({ data }) => {
    const { t } = useTranslation()

    return (
        <>
            <IndexLines />

            <Gallery>
                {data.map((x, i) => {
                    const indexCycled = i % 6
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
