import { useTranslation } from '../i18n'

const locales = new Map([
    ['ru', 'ru_RU'],
    ['en', 'en_US'],
])

export function useLocale() {
    const { i18n } = useTranslation()

    return locales.get(i18n.language)
}
