import { GetStaticProps, NextPage } from 'next'
import { Gallery } from '../src/components/Gallery'
import { Title } from '../src/components/Title'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { GalleryItem, IGalleryItemProps } from '@/components/Gallery/GalleryItem'
import { getPageBySlug } from '@/api'

const projects: {
    href: string
    size?: 1 | 2 | 4
}[] = [
        {
            'href': '/nyagan',
        },
        {
            'href': '/volokolamsk',
        },
        {
            'href': '/latlng',
        },
        {
            'href': '/ugra-edu',
        },
        {
            'href': '/uray-ppi',
        },
        {
            'href': '/heterotopia',
        },
        {
            'href': '/oymyakon',
        },
        {
            'href': '/hovrinka',
        },
        {
            'href': '/delta',
        },
        {
            'href': '/application-manual',
        },
        {
            'href': '/gorprojects-spb',
        },
        {
            'href': '/yoshkola',
        },
        {
            'href': '/scnd-boulevard',
        },
        {
            'href': '/scnd-park',
        },
        {
            'href': '/shelter',
        },
        {
            'href': '/swarm',
        },
        {
            'href': '/scnd-dc',
        },
        {
            'href': '/scnd-gb',
        },
        {
            'href': '/samarapark',
        },
        {
            'href': '/garagescreen',
        },
        {
            'href': '/scnd-d',
        },
        {
            'href': '/krvostok',
        },
        {
            'href': '/trollgardens',
        },
        {
            'href': '/chistopol2',
        },
        {
            'href': '/kemb',
        },
        {
            'href': '/model4',
        },
        {
            'href': '/chistopol',
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
                            tags={x.tags}
                            href={x.href}
                            size={x?.size ?? autosize}
                            mode={'projects'}
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
        const tags = [page?.location ?? null, page?.year ?? null, ...page?.tags ?? []]
        return {
            ...x,
            src,
            text,
            tags,
        }
    })

    const getTagsPlaceholder = () => {
        const roundZeroToI = (i) => Math.floor(Math.random() * i)

        const count = 1 + roundZeroToI(3)
        return [
            ['Санкт-Петербург', 'Краснокамск', 'Нижний Новгород', 'Гюмри', 'Питкяранта'][roundZeroToI(5)],
            ['2027', '2020', '2019', '2020', '2020'][roundZeroToI(5)],
            ...['соцкульт', 'дизайн-код', 'софт', 'education', 'research', 'masterplan', 'мастерплан'].reduce((acc, x, i, arr) => {
                const index = roundZeroToI(arr.length - 1)
                const item = arr.splice(index, 1)[0]
                return i > count ? acc : [...acc, item]
            }, [])
        ]
    }


    return {
        props: {
            data,
        }
    }
}
export default Page
