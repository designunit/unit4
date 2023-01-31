import Head from 'next/head'
import { useRouter } from 'next/router'
import { resizeImage } from '../../lib/image'

export type MetaProps = {
    title: string
    description: string
    image: string
    url: string
    type?: string
}

export const Meta: React.FC<MetaProps> = ({ type = 'website', ...props }) => {
    const { locale } = useRouter()
    const image = resizeImage(props.image, {
        fit: 'cover',
        h: 1200,
        w: 1200,
    })

    return (
        <Head>
            {/* Search Engine */}
            <meta name='description' content={props.description} />
            <meta name='image' content={image} />

            {/* Schema.org for Google */}
            <meta itemProp='name' content={props.title} />
            <meta itemProp='description' content={props.description} />
            <meta itemProp='image' content={image} />

            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta property='og:type' content={type} />
            <meta property='og:locale' content={locale} />
            <meta property='og:title' content={props.title} />
            <meta property='og:image' content={image} />
            <meta property='og:url' content={props.url} />
            <meta property='og:description' content={props.description} />
            {/* <meta property='og:image:width' content={props.imageWidth.toString()} /> */}
            {/* <meta property='og:image:height' content={props.imageHeight.toString()} /> */}
            {/* <meta property='og:site_name' content={props.siteName} /> */}

            {/* Twitter */}
            {/* <meta name='twitter:card' content={props.twitterCard} /> */}
            {/* <meta name='twitter:title' content={props.title} /> */}
            {/* <meta name='twitter:description' content={props.description} /> */}
            {/* <meta name='twitter:image:src' content={props.image} /> */}
            {/* <meta name='twitter:domain' content={props.domain} /> */}
            {/* <meta name='twitter:url' content={props.url} /> */}
            {/* <meta name='twitter:site' content={props.twitterSite} /> */}
            {/* <meta name='twitter:creator' content={props.twitterCreator} /> */}
        </Head>
    )
}
