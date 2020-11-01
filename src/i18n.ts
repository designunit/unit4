import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ru from './ru.json'
import en from './en.json'

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            ru,
            en,
        },
        defaultNS: 'translation',
        // lng: "en",
        // fallbackLng: 'ru',

        // interpolation: {
        // escapeValue: false
        // }
    })