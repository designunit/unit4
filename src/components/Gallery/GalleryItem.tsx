import className from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import { IGalleryItem } from '.'

export interface IGalleryItemProps extends IGalleryItem {
    smallLabel: boolean
}

export const GalleryItem: React.FC<IGalleryItemProps> = props => (
    <Link href={props.href}>
        <a className={'image'}>
            <style jsx>{`
                a {
                    display: block;

                    overflow: hidden;
                }

                a:hover img {
                    transform: scale(1);
                }

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;

                    filter: sepia(100%) hue-rotate(260deg);
                    filter: grayscale(100%) contrast(0.75) brightness(1.25);

                    transition: 0.25s ease;
                    transform: scale(1);
                }

                .image {
                    position: relative;
                }

                .image::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;

                    transition: .5s ease;

                    background-color: #f91b86;
                    mix-blend-mode: multiply;
                }

                .label {
                    z-index: 1;
                    pointer-events: none;

                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    color: white;
                    font-family: var(--font-normal-family);
                    font-weight: bolder;
                    font-size: 1.2em;
                    text-align: center;

                    padding: 5px;
                }

                .label.small {
                    font-size: 0.8em;
                    line-height: 1.6em;
                }

                @media screen and (max-width: 31.25em) {
                    .label {
                        font-size: 0.8em;
                    }

                    img {
                        transform: scale(1.1);
                    }
                }
            `}</style>

            <img
                src={props.src}
            />

            <div className={className('label', {
                small: props.smallLabel,
            })}>
                {props.text}
            </div>
        </a>
    </Link>
)
