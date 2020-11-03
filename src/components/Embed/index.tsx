import s from './embed.module.css'

export interface EmbedProp {
    style?: React.CSSProperties
    src: string,
    ratio?: number,
}

export const Embed: React.FC<EmbedProp> = props => {
    const r = props.ratio ?? 544 / 869

    return (
        <div className={s.embed} style={{
            ...props.style,
            paddingBottom: `${r * 100}%`,
        }}>
            <iframe
                src={props.src}
                // allowFullscreen={true}
                // width='100%'
                // height='500'
                frameBorder='0'
            // allow='autoplay; fullscreen'
            />
        </div>
    )
}
