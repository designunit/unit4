import { GetStaticProps, NextPage } from 'next'
import { Gallery } from '../src/components/Gallery'
import { Title } from '../src/components/Title'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { GalleryItem, IGalleryItemProps } from '@/components/Gallery/GalleryItem'
import { getPageBySlug } from '@/api'

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
                            break;
                        case 1:
                        case 2:
                            autosize = 1

                        case 3:
                        case 4:
                        case 5:
                            autosize = 2
                        default:
                            break;
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
        const { cover: src, title: text, tags, location, year } = page
        return {
            ...x,
            src,
            text,
            tags: [location ?? null, year ?? null, ...tags]
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