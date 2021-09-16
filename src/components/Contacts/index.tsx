import { mdiInstagram, mdiFacebook, mdiVimeo } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

export const Contacts: React.FC<{ reverse: boolean }> = ({ reverse }) => (
    <footer>
        <style jsx>{`
            footer {
                display: flex;
                flex-flow: ${reverse ? 'row-reverse' : 'row'};
                justify-content: space-between;
            }

            .texts {
                display: flex;
                flex-flow: column;
                gap: 8px;
                text-align: ${reverse ? 'right' : 'left'};
            }

            .icons {
                display: flex;
                align-items: end;
                gap: 16px;
            }

            .icon {
                position: relative;
                bottom: -4px;
                color: var(--color-text-opposite);
            }
        `}</style>
        <div className='texts' >
            <a
                href='mailto:inbox@unit4.io'
                target={'_blank'}
                style={{ color: 'var(--color-text-opposite)' }}
            >
                inbox @unit4.io
            </a>
            <a
                href='tel:+79219980303'
                target={'_blank'}
                style={{ color: 'var(--color-text-opposite)' }}
            >
                +7 921 9980303
            </a>
        </div>
        <div className='icons'>
            <a
                href={'https://www.instagram.com/unit4.io/'}
                target='_blank'
                className='icon'
            >
                <Icon
                    path={mdiInstagram}
                    size={1.25}
                />
            </a>
            <a
                href={'https://www.facebook.com/designunit4'}
                target='_blank'
                className='icon'
            >
                <Icon
                    path={mdiFacebook}
                    size={1.25}
                />
            </a>
            <a
                href={'https://vimeo.com/designunit4'}
                target='_blank'
                className='icon'
            >
                <Icon
                    path={mdiVimeo}
                    size={1.25}
                />
            </a>
        </div>
    </footer>
)