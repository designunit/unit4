import { NextPage } from 'next'
import { Gallery } from '../src/components/Gallery'
import { Title } from '../src/components/Title'
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'
import { GalleryItem } from '@/components/Gallery/GalleryItem'

const tags = [
    'все',
    'конкурсы',
    'эскизы',
    'тег в три слова',
    'жопа',
]

const Page: NextPage = () => {
    const { t } = useTranslation()

    const [tag, setTag] = useState(tags[0])

    const getTagsPlaceholder = () => {
        const roundZeroToI = (i) => Math.floor(Math.random() * i)
        return [
            ['Санкт-Петербург', 'Краснокамск', 'Нижний Новгород', 'Гюмри', 'Питкяранта'][roundZeroToI(5)],
            ['2027', '2020', '2019', '2020', '2020'][roundZeroToI(5)],
            ...[
                ['соцкульт', 'дизайн-код', 'софт', 'education', 'research', 'masterplan', 'мастерплан'][roundZeroToI(7)],
                ['соцкульт', 'дизайн-код', 'софт', 'education', 'research', 'masterplan', 'мастерплан'][roundZeroToI(7)],
                ['соцкульт', 'дизайн-код', 'софт', 'education', 'research', 'masterplan', 'мастерплан'][roundZeroToI(7)],
                ['соцкульт', 'дизайн-код', 'софт', 'education', 'research', 'masterplan', 'мастерплан'][roundZeroToI(7)],
            ].slice(0, 1 + roundZeroToI(3))
        ]
    }

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
                <GalleryItem
                    key={'https://s.tmshv.com/unit4/volokolamsk-04.jpg'}
                    src={'https://s.tmshv.com/unit4/volokolamsk-04.jpg'}
                    text={'МОСКОВСКИЙ ТРАКТ ВОЛОКОЛАМСК'}
                    alt={undefined}
                    href={'/volokolamsk'}
                    smallLabel={false}
                    mode={'projects'}
                    size={4}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/latlng-latlng.gif'}
                    src={'https://s.tmshv.com/unit4/latlng-latlng.gif'}
                    text={'LATL.NG облачная ГИС'}
                    alt={undefined}
                    href={'/latlng'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/edu_ugra-01.jpg'}
                    src={'https://s.tmshv.com/unit4/edu_ugra-01.jpg'}
                    text={'ОБУЧАЮЩИЙ СЕМИНАР ХМАО ФКГС'}
                    alt={undefined}
                    href={'/ugra-edu'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/uray_ppi-urai.jpg'}
                    src={'https://s.tmshv.com/unit4/uray_ppi-urai.jpg'}
                    text={'ИССЛЕДОВАНИЕ УРАЙ ХМАО'}
                    alt={undefined}
                    href={'/uray-ppi'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/heterotopia-heterotopia.gif'}
                    src={'https://s.tmshv.com/unit4/heterotopia-heterotopia.gif'}
                    text={'ГЕТЕРОТОПИИ СО-ВРЕМЕННОСТИ'}
                    alt={undefined}
                    href={'/heterotopia'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/oymyakon-viz_gulag.jpg'}
                    src={'https://s.tmshv.com/unit4/oymyakon-viz_gulag.jpg'}
                    text={'ОЙМЯКОН п(о)люс со-временности'}
                    alt={undefined}
                    href={'/oymyakon'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/hovrinka-hovrinka.jpg'}
                    src={'https://s.tmshv.com/unit4/hovrinka-hovrinka.jpg'}
                    text={'СОЦИАЛЬНО-КУЛЬТУРНЫЙ ЦЕНТР ХОВРИНКА'}
                    alt={undefined}
                    href={'/hovrinka'}
                    smallLabel={false}
                    mode={'projects'}
                    size={4}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/delta-delta.jpg'}
                    src={'https://s.tmshv.com/unit4/delta-delta.jpg'}
                    text={'БЛАГОУСТРОЙСТВО ЖК COMCITY МОСКВА'}
                    alt={undefined}
                    href={'/delta'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/app_manual-manual.jpg'}
                    src={'https://s.tmshv.com/unit4/app_manual-manual.jpg'}
                    text={'МЕТОДИЧЕСКИЕ РЕКОМЕНДАЦИИ ХМАО'}
                    alt={undefined}
                    href={'/application-manual'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/gorprojects_spb-project3-todo-after_.jpg'}
                    src={'https://s.tmshv.com/unit4/gorprojects_spb-project3-todo-after_.jpg'}
                    text={'КОНЦЕПЦИИ spb.city4people.ru'}
                    alt={undefined}
                    href={'/gorprojects-spb'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/yoshkola-04.jpg'}
                    src={'https://s.tmshv.com/unit4/yoshkola-04.jpg'}
                    text={'IT ШКОЛА ЙОШКАР-ОЛА'}
                    alt={undefined}
                    href={'/yoshkola'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/boulevard_scnd-boulevard.jpg'}
                    src={'https://s.tmshv.com/unit4/boulevard_scnd-boulevard.jpg'}
                    text={'БУЛЬВАР ЖИЛОГО РАЙОНА СКАНДИНАВИЯ'}
                    alt={undefined}
                    href={'/scnd-boulevard'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/park_scnd-park.jpg'}
                    src={'https://s.tmshv.com/unit4/park_scnd-park.jpg'}
                    text={'ПАРК ЖИЛОГО РАЙОНА СКАНДИНАВИЯ'}
                    alt={undefined}
                    href={'/scnd-park'}
                    smallLabel={false}
                    mode={'projects'}
                    size={4}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/shelter-01.jpg'}
                    src={'https://s.tmshv.com/unit4/shelter-01.jpg'}
                    text={'ИНСТАЛЛЯЦИЯ NEST WIND SHELTER'}
                    alt={undefined}
                    href={'/shelter'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/swarm-swarm.jpg'}
                    src={'https://s.tmshv.com/unit4/swarm-swarm.jpg'}
                    text={'МОДЕЛИРОВАНИЕ ПЕШЕХОДНЫХ ПОТОКОВ SWARM'}
                    alt={undefined}
                    href={'/swarm'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/dc_scnd-dc.gif'}
                    src={'https://s.tmshv.com/unit4/dc_scnd-dc.gif'}
                    text={'ДИЗАЙН-КОД ОТКРЫТЫХ ГОРОДСКИХ ПРОСТРАНСТВ'}
                    alt={undefined}
                    href={'/scnd-dc'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/gb_scnd-gb.jpg'}
                    src={'https://s.tmshv.com/unit4/gb_scnd-gb.jpg'}
                    text={'КОНЦЕПЦИЯ ОТКРЫТЫХ ГОРОДСКИХ ПРОСТРАНСТВ'}
                    alt={undefined}
                    href={'/scnd-gb'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/samarapark-10.jpg'}
                    src={'https://s.tmshv.com/unit4/samarapark-10.jpg'}
                    text={'ПАРК ЗАГОРОДНЫЙ САМАРА'}
                    alt={undefined}
                    href={'/samarapark'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/garagescreen-02.gif'}
                    src={'https://s.tmshv.com/unit4/garagescreen-02.gif'}
                    text={'GARAGE SCREEN COMPETITION'}
                    alt={undefined}
                    href={'/garagescreen'}
                    smallLabel={false}
                    mode={'projects'}
                    size={4}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/d_scnd-03.jpg'}
                    src={'https://s.tmshv.com/unit4/d_scnd-03.jpg'}
                    text={'ДВОРЫ ЖИЛОГО РАЙОНА СКАНДИНАВИЯ'}
                    alt={undefined}
                    href={'/scnd-d'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/krvostok-01.jpg'}
                    src={'https://s.tmshv.com/unit4/krvostok-01.jpg'}
                    text={'КОНЦЕПЦИЯ БЛАГОУСТРОЙСТВА ЗАВОДА КРАСНЫЙ ВОСТОК'}
                    alt={undefined}
                    href={'/krvostok'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/trollgardens-05.jpg'}
                    src={'https://s.tmshv.com/unit4/trollgardens-05.jpg'}
                    text={'САДЫ ТРОЛЛЕЙ'}
                    alt={undefined}
                    href={'/trollgardens'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/chistopol2-07.jpg'}
                    src={'https://s.tmshv.com/unit4/chistopol2-07.jpg'}
                    text={'БУЛЬВАР ЧИСТОПОЛЬ ТАТАРСТАН ФАЗА #2'}
                    alt={undefined}
                    href={'/chistopol2'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/kemb-01.jpg'}
                    src={'https://s.tmshv.com/unit4/kemb-01.jpg'}
                    text={'ИССЛЕДОВАНИЕ НАБЕРЕЖНОЙ КАРПОВКИ'}
                    alt={undefined}
                    href={'/kemb'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/model4-01.jpg'}
                    src={'https://s.tmshv.com/unit4/model4-01.jpg'}
                    text={'СЕРИЯ ИЗДЕЛИЙ МОДЕЛЬ : : 4'}
                    alt={undefined}
                    href={'/model4'}
                    smallLabel={false}
                    mode={'projects'}
                    size={4}
                />

                <GalleryItem
                    key={'https://s.tmshv.com/unit4/chistopol-02.jpg'}
                    src={'https://s.tmshv.com/unit4/chistopol-02.jpg'}
                    text={'БУЛЬВАР ЧИСТОПОЛЬ ТАТАРСТАН ФАЗА #1'}
                    alt={undefined}
                    href={'/chistopol'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />
            </Gallery>
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