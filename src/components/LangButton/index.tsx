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

                .button {
                    text-decoration: none;

                    border: 1px solid rgba(0,0,0,0)
                    border-radius: 0;
                    margin: 0;
                    padding: 5px 10px;

                    color: var(--color-text);
                    background-color: var(--color-background);
                }

                .button:first-child {
                    border-right: none;
                }

                .button:last-child {
                    border-left: none;
                }

                .button.active:hover {
                    background-color: var(--link-color-active);
                }

                .button.active {
                    cursor: pointer;
                    color: var(--color-text-opposite);
                    border-color: var(--link-color-active);
                    background-color: var(--color-background-opposite);
                }
            `}</style>

            {locales.map(locale => router.locale === locale
                ? (
                    <span className={'button'} key={locale}>{t(locale)}</span>
                ) : (
                    <Link key={locale} href={router.asPath} locale={locale}>
                        <a className={cx('button', 'active')}>
                            {t(locale)}
                        </a>
                    </Link>
                ))}
        </div>
    )
}
