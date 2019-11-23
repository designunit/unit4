import { defaultLanguage, useTranslation } from '../i18n'

export function useLangUrlPrefix() {
    const { i18n } = useTranslation()
    const lang = i18n.language
    const urlPrefix = lang === defaultLanguage ? '' : '/en'

    return urlPrefix
}
