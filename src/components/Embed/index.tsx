import './styles.css'

export interface EmbedProp {
    src: string,
    ratio?: number,
}

export const Embed: React.SFC<EmbedProp> = props => {
    const r = props.ratio ?? 544 / 869

    return (
        <div className={'embed'} style={{
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
