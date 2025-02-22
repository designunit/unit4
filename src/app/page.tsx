import type { Metadata } from 'next'
import type { CardSize } from '@/types'
import { Gallery } from '@/components/Gallery'
import { GalleryItem } from '@/components/Gallery/GalleryItem'
import { getPageBySlug } from '@/api'
import { useAutoCardSize } from '@/hooks/useAutoCardSize'
import { DEFAULT_COVER, URL_BASE } from '@/constants'

type ProjectItem = {
    coverSrc: string
    title: string
    href: string
    caption: string
    tags: string[]
    size?: CardSize
}

const projects: Partial<ProjectItem>[] = [
    {
        href: '/nefteyugansk',
        size: 4,
    },
    {
        href: '/verhoturie',
        size: 2,
    },
    {
        href: '/verhnyayatura',
        size: 2,
    },
    {
        href: '/volokolamsk-2',
        size: 2,
    },
    {
        href: '/yakutsk',
        size: 1,
    },
    {
        href: '/photostream',
        size: 4,
    },
    {
        href: '/shvl-spb',
        size: 2,
    },
    {
        href: '/skysoul',
        size: 2,
    },
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
    },
]

function loadProjects(): ProjectItem[] {
    const locale = 'ru'
    return projects
        .map((project, i) => {
            const page = getPageBySlug(locale, project.href!)
            const coverSrc = page?.cover ?? DEFAULT_COVER
            const title = page?.title ?? ''
            const tags = [
                ...(page?.location ? [page?.location] : []),
                ...(page?.year ? [page?.year] : []),
                ...page?.tags ?? [],
            ] as string[]
            const caption = '' // TODO: use actual data here

            return {
                href: project.href!,
                size: project.size,
                caption,
                coverSrc,
                title,
                tags,
            }
        })
}

export const metadata: Metadata = {
    title: 'design unit 4',
    description: 'Студия средового дизайна',
    openGraph: {
        url: `${URL_BASE}/`,
        images: [
            DEFAULT_COVER,
        ],
    },
}

const Page: React.FC = () => {
    const autosize = useAutoCardSize(6)
    const projects = loadProjects()

    return (
        <Gallery>
            {projects.map((x, i) => (
                <GalleryItem
                    key={x.href}
                    src={x.coverSrc}
                    alt={x.caption}
                    title={x.title}
                    tags={x.tags}
                    href={x.href}
                    size={x?.size ?? autosize(i)}
                />
            ))}
        </Gallery>
    )
}

export default Page
