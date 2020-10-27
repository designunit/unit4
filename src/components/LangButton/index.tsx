import * as React from 'react'

import cx from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

function useLangHrefs() {
    const router = useRouter()
    const href = router.asPath.replace(/^\/en/, '')

    return [href, `/en${href}`]
}

export interface ILangButtonProps {
    style?: React.CSSProperties
}

export const LangButton: React.FC<ILangButtonProps> = props => {
    const [ru, en] = useLangHrefs()
    const { t, i18n } = useTranslation()
    const lang = i18n.language

    const isCurrentRu = lang === 'ru'
    const isCurrentEn = lang === 'en'

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

            <Link href={ru}>
                <a className={cx({ active: isCurrentRu })}>
                    {t('ru')}
                </a>
            </Link>

            <Link href={en}>
                <a className={cx({ active: isCurrentEn })}>
                    {t('en')}
                </a>
            </Link>
        </div>
    )
}
