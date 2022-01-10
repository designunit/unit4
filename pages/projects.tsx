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
    // .filter((x: any, index) => tag === tags[0] ? true : (
    //     index % (indexOf(tags, tag) + 1) == 0
    // ))

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
                    key={'/images/derbent-preview.jpg'}
                    src={'/images/derbent-preview.jpg'}
                    text={'Благоустройство береговой линии города Дербент'}
                    alt={undefined}
                    href={'/derbent'}
                    smallLabel={false}
                    mode={'projects'}
                    size={4}
                />

                <GalleryItem
                    key={'/images/Kandelaki-preview.jpg'}
                    src={'/images/Kandelaki-preview.jpg'}
                    text={'Благоустройство улицы Канделаки'}
                    alt={undefined}
                    href={'/kandelaki'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />
                
                <GalleryItem
                    key={'/images/zapolyarniy-preview.jpg'}
                    src={'/images/zapolyarniy-preview.jpg'}
                    text={'Исследование города Заполярного'}
                    alt={undefined}
                    href={'/zapolyarniy'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/sisu.svg'}
                    src={'/images/sisu.svg'}
                    text={'Сервис SISU'}
                    alt={undefined}
                    href={'/sisu'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/nyagan_1.jpg'}
                    src={'/images/nyagan_1.jpg'}
                    text={'ЦЕНТРАЛЬНЫЙ ЛЕС КУЛЬТУРЫ И ОТДЫХА'}
                    alt={undefined}
                    href={'/nyagan'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/volokolamsk-04.jpg'}
                    src={'/images/volokolamsk-04.jpg'}
                    text={'МОСКОВСКИЙ ТРАКТ ВОЛОКОЛАМСК'}
                    alt={undefined}
                    href={'/volokolamsk'}
                    smallLabel={false}
                    mode={'projects'}
                    size={4}
                />

                <GalleryItem
                    key={'/images/latlng.jpg'}
                    src={'/images/latlng.jpg'}
                    text={'LATL.NG облачная ГИС'}
                    alt={undefined}
                    href={'/latlng'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'/images/edu_ugra-01.jpg'}
                    src={'/images/edu_ugra-01.jpg'}
                    text={'ОБУЧАЮЩИЙ СЕМИНАР ХМАО ФКГС'}
                    alt={undefined}
                    href={'/ugra-edu'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'/images/uray_ppi-urai.jpg'}
                    src={'/images/uray_ppi-urai.jpg'}
                    text={'ИССЛЕДОВАНИЕ УРАЙ ХМАО'}
                    alt={undefined}
                    href={'/uray-ppi'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/heterotopia-heterotopia_01.jpg'}
                    src={'/images/heterotopia-heterotopia_01.jpg'}
                    text={'ГЕТЕРОТОПИИ СО-ВРЕМЕННОСТИ'}
                    alt={undefined}
                    href={'/heterotopia'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/oymyakon-viz_gulag.jpg'}
                    src={'/images/oymyakon-viz_gulag.jpg'}
                    text={'ОЙМЯКОН п(о)люс со-временности'}
                    alt={undefined}
                    href={'/oymyakon'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/hovrinka-hovrinka.jpg'}
                    src={'/images/hovrinka-hovrinka.jpg'}
                    text={'СОЦИАЛЬНО-КУЛЬТУРНЫЙ ЦЕНТР ХОВРИНКА'}
                    alt={undefined}
                    href={'/hovrinka'}
                    smallLabel={false}
                    mode={'projects'}
                    size={4}
                />

                <GalleryItem
                    key={'/images/delta-delta.jpg'}
                    src={'/images/delta-delta.jpg'}
                    text={'БЛАГОУСТРОЙСТВО ЖК COMCITY МОСКВА'}
                    alt={undefined}
                    href={'/delta'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'/images/app_manual-manual.jpg'}
                    src={'/images/app_manual-manual.jpg'}
                    text={'МЕТОДИЧЕСКИЕ РЕКОМЕНДАЦИИ ХМАО'}
                    alt={undefined}
                    href={'/application-manual'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'/images/gorprojects_spb-project3-todo-after_.jpg'}
                    src={'/images/gorprojects_spb-project3-todo-after_.jpg'}
                    text={'КОНЦЕПЦИИ spb.city4people.ru'}
                    alt={undefined}
                    href={'/gorprojects-spb'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/yoshkola-04.jpg'}
                    src={'/images/yoshkola-04.jpg'}
                    text={'IT ШКОЛА ЙОШКАР-ОЛА'}
                    alt={undefined}
                    href={'/yoshkola'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/boulevard_scnd-boulevard.jpg'}
                    src={'/images/boulevard_scnd-boulevard.jpg'}
                    text={'БУЛЬВАР ЖИЛОГО РАЙОНА СКАНДИНАВИЯ'}
                    alt={undefined}
                    href={'/scnd-boulevard'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/park_scnd-park.jpg'}
                    src={'/images/park_scnd-park.jpg'}
                    text={'ПАРК ЖИЛОГО РАЙОНА СКАНДИНАВИЯ'}
                    alt={undefined}
                    href={'/scnd-park'}
                    smallLabel={false}
                    mode={'projects'}
                    size={4}
                />

                <GalleryItem
                    key={'/images/shelter-01.jpg'}
                    src={'/images/shelter-01.jpg'}
                    text={'ИНСТАЛЛЯЦИЯ NEST WIND SHELTER'}
                    alt={undefined}
                    href={'/shelter'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'/images/swarm-swarm.jpg'}
                    src={'/images/swarm-swarm.jpg'}
                    text={'МОДЕЛИРОВАНИЕ ПЕШЕХОДНЫХ ПОТОКОВ SWARM'}
                    alt={undefined}
                    href={'/swarm'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'/images/dc_scnd-dc.jpg'}
                    src={'/images/dc_scnd-dc.jpg'}
                    text={'ДИЗАЙН-КОД ОТКРЫТЫХ ГОРОДСКИХ ПРОСТРАНСТВ'}
                    alt={undefined}
                    href={'/scnd-dc'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/gb_scnd-gb.jpg'}
                    src={'/images/gb_scnd-gb.jpg'}
                    text={'КОНЦЕПЦИЯ ОТКРЫТЫХ ГОРОДСКИХ ПРОСТРАНСТВ'}
                    alt={undefined}
                    href={'/scnd-gb'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/samarapark-10.jpg'}
                    src={'/images/samarapark-10.jpg'}
                    text={'ПАРК ЗАГОРОДНЫЙ САМАРА'}
                    alt={undefined}
                    href={'/samarapark'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/garagescreen-01.jpg'}
                    src={'/images/garagescreen-01.jpg'}
                    text={'GARAGE SCREEN COMPETITION'}
                    alt={undefined}
                    href={'/garagescreen'}
                    smallLabel={false}
                    mode={'projects'}
                    size={4}
                />

                <GalleryItem
                    key={'/images/d_scnd-03.jpg'}
                    src={'/images/d_scnd-03.jpg'}
                    text={'ДВОРЫ ЖИЛОГО РАЙОНА СКАНДИНАВИЯ'}
                    alt={undefined}
                    href={'/scnd-d'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'/images/krvostok-01.jpg'}
                    src={'/images/krvostok-01.jpg'}
                    text={'КОНЦЕПЦИЯ БЛАГОУСТРОЙСТВА ЗАВОДА КРАСНЫЙ ВОСТОК'}
                    alt={undefined}
                    href={'/krvostok'}
                    smallLabel={false}
                    mode={'projects'}
                    size={1}
                />

                <GalleryItem
                    key={'/images/trollgardens-05.jpg'}
                    src={'/images/trollgardens-05.jpg'}
                    text={'САДЫ ТРОЛЛЕЙ'}
                    alt={undefined}
                    href={'/trollgardens'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/chistopol2-07.jpg'}
                    src={'/images/chistopol2-07.jpg'}
                    text={'БУЛЬВАР ЧИСТОПОЛЬ ТАТАРСТАН ФАЗА #2'}
                    alt={undefined}
                    href={'/chistopol2'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/kemb-01.jpg'}
                    src={'/images/kemb-01.jpg'}
                    text={'ИССЛЕДОВАНИЕ НАБЕРЕЖНОЙ КАРПОВКИ'}
                    alt={undefined}
                    href={'/kemb'}
                    smallLabel={false}
                    mode={'projects'}
                    size={2}
                />

                <GalleryItem
                    key={'/images/model4-01.jpg'}
                    src={'/images/model4-01.jpg'}
                    text={'СЕРИЯ ИЗДЕЛИЙ МОДЕЛЬ : : 4'}
                    alt={undefined}
                    href={'/model4'}
                    smallLabel={false}
                    mode={'projects'}
                    size={4}
                />

                <GalleryItem
                    key={'/images/chistopol-02.jpg'}
                    src={'/images/chistopol-02.jpg'}
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
