import cx from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import s from './lang-button.module.css'

export interface ILangButtonProps {
    style?: React.CSSProperties
}

export const LangButton: React.FC<ILangButtonProps> = props => {
    const router = useRouter()
    const { t } = useTranslation('locale')
    const locales = router.locales ?? []

    return (
        <div className={s.container} style={props.style}>
            {locales.map(locale => router.locale === locale
                ? (
                    <span className={s.button} key={locale}>{t(locale)}</span>
                ) : (
                    <Link key={locale} href={router.asPath} locale={locale}>
                        <a className={cx(s.button, s.active)}>
                            {t(locale)}
                        </a>
                    </Link>
                ))}
        </div>
    )
}
