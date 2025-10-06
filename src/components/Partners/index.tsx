import { GalleryPartners, Item } from '@/components/GalleryPartners'
import { Title } from '@/components/Title'

const items = [
    '/static/partners/0.png',
    '/static/partners/1.svg',
    '/static/partners/2.png',
    '/static/partners/3.jpg',
    '/static/partners/4.svg',
    '/static/partners/5.svg',
    '/static/partners/6.svg',
    '/static/partners/7.png',
    '/static/partners/8.png',
    '/static/partners/9.svg',
    '/static/partners/10.png',
    '/static/partners/11.svg',
    '/static/partners/12.svg',
    '/static/partners/13.svg',
    '/static/partners/14.svg',
    '/static/partners/15.svg',
    '/static/partners/16.svg',
    '/static/partners/17.svg',
    '/static/partners/18.svg',
]

export const Partners: React.FC = () => (
    <>
        <Title as='h2'>
            С нами работают
        </Title>

        <GalleryPartners style={{
            marginBottom: 50,
        }}>
            {items.map((x, i) => (
                <Item
                    key={i}
                    src={x}
                />
            ))}
        </GalleryPartners>
    </>
)
