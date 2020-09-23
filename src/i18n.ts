import NextI18Next from 'next-i18next'
import config from 'next/config'
// const { localeSubpaths } = config.publicRuntimeConfig
const localeSubpaths = {
    en: 'en',
}

const instance = new NextI18Next({
    defaultLanguage: 'ru',
    otherLanguages: ['en'],
    localePath: './public/locales',
    localeSubpaths,
})

export default instance

export const {
    appWithTranslation,
    withTranslation,
    useTranslation,
    i18n,
} = instance

export const defaultLanguage = instance.config.defaultLanguage
