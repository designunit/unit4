import NextI18Next from 'next-i18next'

const instance = new NextI18Next({
    defaultLanguage: 'ru',
    otherLanguages: ['en'],

    localeSubpaths: {
        en: 'en',
    },
})

export default instance

export const {
    appWithTranslation,
    withTranslation,
    useTranslation,
    i18n,
} = instance

export const defaultLanguage = instance.config.defaultLanguage
