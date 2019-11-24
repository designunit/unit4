import * as React from 'react'

import cx from 'classnames'
import { useTranslation } from '../../i18n'

export interface ILangButtonProps {
    style?: React.CSSProperties
}

export const LangButton: React.FC<ILangButtonProps> = props => {
    const { t, i18n } = useTranslation()
    const lang = i18n.language

    const isCurrentRu = lang === 'ru'
    const isCurrentEn = lang === 'en'

    const onClickRu = React.useCallback(() => {
        switchLanguage('ru')
    }, [])

    const onClickEn = React.useCallback(() => {
        switchLanguage('en')
    }, [])

    const switchLanguage = React.useCallback((language: string) => {
        i18n.changeLanguage(language)
            .then(() => {
                setTimeout(() => {
                    scroll(0, 0)
                    document.location.reload()
                }, 10)
            })
    }, [])

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
                    background-color: none;
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

            <button className={cx({ active: isCurrentRu })} onClick={onClickRu}>
                {t('ru')}
            </button>

            <button className={cx({ active: isCurrentEn })} onClick={onClickEn}>
                {t('en')}
            </button>
        </div>
    )
}
