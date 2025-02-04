import s from './logo.module.css'

export type LogoProps = {
    href: string
    invert?: boolean
}

export const Logo: React.FC<LogoProps> = ({href, invert = false}) => (
    <a href={href} title={'logo'} className={`${s.logo} ${invert ? s.invert : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.08 9.52">
            <rect className={s.cls0} width="52.08" height="9.52" />
            <rect className={s.cls1} x="35.28" y="6.16" width="1.68" height="1.68" />
            <polygon
                className={s.cls1}
                points="3.36 1.68 3.36 6.16 6.16 6.16 6.16 1.68 7.84 1.68 7.84 7.84 1.68 7.84 1.68 1.68 3.36 1.68"
            />
            <polygon
                className={s.cls1}
                points="8.4 1.68 12.32 1.68 12.32 6.16 12.88 6.16 12.88 1.68 14.56 1.68 14.56 7.84 10.64 7.84 10.64 3.36 10.08 3.36 10.08 7.84 8.4 7.84 8.4 1.68"
            />
            <path
                className={s.cls1}
                d="m15.12,5.6v-1.68h3.36v1.4c0,.46.38.84.84.84h1.96v1.68h-1.96c-1.3,0-2.36-.98-2.5-2.24h-1.69Zm1.68-3.92h1.68v1.68h-1.68v-1.68Z"
            />
            <polygon
                className={s.cls1}
                points="21.84 1.68 28 1.68 28 3.36 25.83 3.36 27.78 5.32 26.6 6.5 25.76 5.67 25.76 7.84 24.08 7.84 24.08 5.67 23.24 6.5 22.05 5.32 24.01 3.36 21.84 3.36 21.84 1.68"
            />
            {/* <g> */}
            <path
                className={s.cls1}
                d="m37.52,5.6v-1.68h3.36v1.4c0,.46.38.84.84.84h1.96v1.68h-1.96c-1.3,0-2.36-.98-2.5-2.24h-1.69Zm1.68-3.92h1.68v1.68h-1.68v-1.68Z"
            />
            <path
                className={s.cls1}
                d="m50.4,7.84h-6.16V1.68h6.16v6.16Zm-1.68-4.48h-2.8v2.8h2.8v-2.8Z"
            />
            {/* </g> */}
            <polygon
                className={s.cls1}
                points="34.72 3.91 32.48 3.91 32.48 1.68 30.79 1.68 30.79 3.91 30.25 3.91 30.25 1.68 28.56 1.68 28.56 3.91 28.56 5.6 30.25 5.6 30.79 5.6 30.79 7.84 32.48 7.84 32.48 5.6 34.72 5.6 34.72 3.91"
            />
        </svg>
    </a>
)
