import { Title } from '@/components/Title'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { UnitHighlight } from '@/components/UnitHighlight'
import { ImageSet } from '@/components/ImageSet'
import { WideBlock } from '@/components/WideBlock'
import { Flex } from '@/components/Flex'
import { BlackHighlight } from '@/components/BlackHighlight'
import { BeforeAfter } from '@/components/BeforeAfter'
import type { ImageProps } from 'next/image'
import type { ImageSetProps } from '@/components/ImageSet'

const OymyakonSankey = dynamic(import('@/special/oymyakon/OymyakonSankey'))
const Carousel = dynamic(() => import('@/components/Carousel'))
const HeterotopiaTitle = dynamic(() => import('@/special/heterotopia/Title'))
const HeterotopiaHighlight = dynamic(() => import('@/special/heterotopia/Highlight'))

const mdxComponents = {
    Image: (props: ImageProps & { caption?: string }) => (
        <figure>
            <Image {...props}
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: 'auto',
                }}
                alt={props.alt ?? 'project'} // TODO: do something with optional alt
                width={props.width ?? 1920}
                height={props.height ?? 1200}
            />
            {!props.caption ? null : (
                <figcaption>{props.caption}</figcaption>
            )}
        </figure>
    ),
    ImageSet: (props: ImageSetProps) => (
        <ImageSet {...props}
            style={{ marginBottom: '2em' }}
            width={props.width ?? 1920}
            height={props.height ?? 1200}
        />
    ),
    Carousel,
    UnitHighlight,
    Title,
    OymyakonSankey,
    WideBlock,
    HeterotopiaHighlight,
    HeterotopiaTitle,
    Flex,
    BlackHighlight,
    BeforeAfter,
}

export default mdxComponents
