import type { Metadata } from 'next'
import { GalleryPartners, Item } from '@/components/GalleryPartners'
import { Title } from '@/components/Title'
import { DEFAULT_COVER } from '@/constants'

const items = [
    {
        src: '/static/partners/urbanica.png',
        href: 'http://urbanica.spb.ru/',
    },
    {
        src: '/static/partners/mla.png',
        href: 'https://mlaplus.ru/',
    },
    {
        src: '/static/partners/centr-100.jpg',
        href: 'https://centeragency.org/ru',
    },
    {
        src: '/static/partners/zeitplan.png',
        href: 'https://instagram.com/zeitplan_team/',
    },
    {
        src: '/static/partners/kf.png',
        href: 'https://knightfrank.ru/',
    },
    {
        src: '/static/partners/centr comp-100.jpg',
        href: 'https://gorsreda86.ugraces.ru/',
    },
    {
        src: '/static/partners/admin-kk.png',
        href: 'http://krasnokamsk.ru/',
    },
    {
        src: '/static/partners/admin-nya.png',
        href: 'http://admnyagan.ru/',
    },
    {
        src: '/static/partners/uray.png',
        href: 'https://uray.ru/',
    },
    {
        src: '/static/partners/centr myrmansk-100.jpg', // 10
        href: 'https://instagram.com/centrgoroda51/',
    },
    {
        src: '/static/partners/volokalamsk.png',
        href: 'https://включиволоколамск.рф/',
    },
    {
        src: '/static/partners/admin-derb.png',
        href: 'http://derbent.ru/',
    },
    {
        src: '/static/partners/admin-tura.png',
        href: 'https://v-tura.ru/',
    },
    {
        src: '/static/partners/institut nn-100.jpg',
        href: 'https://irgsno.ru/',
    },
    {
        src: '/static/partners/admin-vol.png',
        href: 'https://volkhov-raion.ru/',
    },
    {
        src: '/static/partners/pitkiaranta.jpg',
        href: 'http://апмр.рф/',
    },
    {
        src: '/static/partners/ispring.png',
        href: 'https://ispring.ru/',
    },
    {
        src: '/static/partners/kiselev-100.jpg',
        href: 'http://sk-p.ru/',
    },
    {
        src: '/static/partners/city project-100.jpg',
        href: 'https://city4people.ru/about-project',
    },
    {
        src: '/static/partners/concjung.png', // 20
        href: 'https://cjungle.com/',
    },
    {
        src: '/static/partners/mishin.png',
        href: 'https://facebook.com/StudioMishin/',
    },
    {
        src: '/static/partners/epishkola-100.jpg',
        href: 'http://epischool.ru/',
    },
    {
        src: '/static/partners/knappt.png',
        href: 'http://knappt.com/',
    },
    {
        src: '/static/partners/8l.png',
        href: 'http://llllllll.ru/',
    },
    {
        src: '/static/partners/kinglab.png',
        href: 'https://kinglab.com/',
    },
    {
        src: '/static/partners/sol.png',
        href: 'https://soliletsk.ru/',
    },
    {
        src: '/static/partners/institut.png',
        href: 'https://genplanmos.ru/',
    },
]

export const metadata: Metadata = {
    title: 'Партнеры design unit 4',
    description: 'С нами работают',
    openGraph: {
        images: [
            DEFAULT_COVER,
        ],
    },
}

const Page: React.FC = () => (
    <>
        <Title>
            С нами работают
        </Title>

        <GalleryPartners style={{
            marginBottom: 50,
        }}>
            {items.map((x, i) => (
                <Item
                    key={x.src}
                    src={x.src}
                    alt={''}
                    href={x.href}
                />
            ))}
        </GalleryPartners>
    </>
)

export default Page
