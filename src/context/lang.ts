import { createContext } from 'react'

export type LangContextType = {
    lang: 'ru' | 'en'
    translations: Map<string, string>
}

export const defaultLang = {
    lang: 'ru',
    translations: new Map()
}
export const LangContext = createContext(defaultLang)