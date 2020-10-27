import cx from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export interface ILangButtonProps {
    style?: React.CSSProperties
}

export const LangButton: React.FC<ILangButtonProps> = props => {
    const router = useRouter()
    const { t } = useTranslation('locale')
    const locales = router.locales ?? []

    return (
        <div style={props.style}>
            <style jsx>{`
                div {
                    box-sizing: border-box;
                }

                button {
                    cursor: pointer;

                    border: 1px solid var(--color-text);
                    border-radius: 0;
                    margin: 0;
                    padding: 2px 10px;

                    color: var(--color-text);
                    background-color: var(--color-background);
                }

                button:first-child {
                    border-right: none;
                }

                button:last-child {
                    border-left: none;
                }

                button.active {
                    border-color: var(--link-color-active);
                    color: var(--color-text);
                    background-color: var(--link-color-active);
                }
            `}</style>

            {locales.map(locale => router.locale === locale
                ? (
                    <span>{t(locale)}</span>
                ) : (
                    <Link href={router.pathname} locale={locale}>
                        <a className={cx({ active: router.locale === locale })}>
                            {t(locale)}
                        </a>
                    </Link>
                ))}
        </div>
    )
}
