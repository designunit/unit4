import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { Embed } from '../src/components/Embed'
import { Gallery } from '../src/components/Gallery'
import { Title } from '../src/components/Title'
import { useLangUrlPrefix } from '../src/hooks/useLangUrlPrefix'
import { useTranslation } from '@/i18n'
import { createGalleryItems } from './'

const Page: NextPage = () => {
    const { t } = useTranslation()
    // const lang = useLangUrlPrefix()
    const lang = ''
    const items = createGalleryItems(lang)

    return (
        <>
            <Title>{t('Repository')}</Title>

            <Gallery
                style={{
                    marginBottom: 50,
                }}
                items={items}
            />
        </>
    )
}

// export const getStaticProps: GetStaticProps = async () => {
// export const setServerSideProps: GetServerSideProps = async () => {
//     return {
//         props: {
//             namespacesRequired: ['common'],
//         }
//     }
// }

// export default withTranslation('common')(Page)
export default Page
