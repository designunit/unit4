import cx from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import { IGalleryItem } from '.'
import s from './GalleryItem.module.css'
import Ratio from 'react-ratio'
import useSWR from 'swr'
import { useRouter } from 'next/router'

export interface IGalleryItemProps extends IGalleryItem {
    size?: 1 | 2 | 4
}

type ContainerProps = Partial<{
    href: string,
    className?: string
}>

const sizeClassNameMap = {
    1: s.col1,
    2: s.col2,
    4: s.col4,
}

const Container: React.FC<ContainerProps> = ({ href, className, children }) => (
    <>
        {href ? (
            <Link href={href}>
                <a className={cx(s.container, className)}>
                    {children}
                </a>
            </Link>
        ) : (
            <div className={cx(s.container, className)}>
                {children}
            </div>
        )}
    </>
)

const fetcher = async (url, method, body) => {
    const res = await fetch(url, { method, body })
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export const GalleryItem: React.FC<any> = ({ href, size, mode, ...props }) => { // IGalleryItemProps
    const isModePartners = mode === 'partners'
    const isModeProjects = mode === 'projects'
    const router = useRouter()

    const { data, error } = useSWR(
        [
            '/api/project',
            'post',
            JSON.stringify({
                slug: href,
                locale: router.locale,
            }),
        ],
        fetcher,
    )
    if (error) {
        console.error(error)
    }

    const src = props.src ?? data?.src
    const tags = data?.tags ?? []
    const text = data?.text

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

    return (
        <Container
            href={href}
            className={isModeProjects && cx(s.border, s.hoverZoom, sizeClassNameMap[size])}
        >
            <div
                className={cx(isModePartners && s.border)}
            >
                {isModeProjects && (
                    <img
                        src={src}
                        className={s.img}
                    />
                )}
                {isModePartners && (
                    <Ratio
                        contentClassName={cx(s.img, isModePartners && s.gray)}
                    >
                        <img
                            src={src}
                            style={{
                                objectFit: 'contain',
                                padding: 10,
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Ratio>
                )}
            </div>
            {isModeProjects && (
                <div className={cx(s.label)}>
                    <span>
                        {text}
                    </span>
                    <div className={s.tags}>
                        {tags.map(x => <span>{x}</span>)}
                    </div>
                </div>
            )}
        </Container>
    )
}
