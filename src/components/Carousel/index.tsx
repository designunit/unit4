import { Fotorama, IFotoramaOptions } from '../Fotorama'

export type CarouselProps = {
    size?: number
    items: string[]
    slider: IFotoramaOptions,
    style?: React.CSSProperties
}

export const Carousel: React.FC<CarouselProps> = props => (
    <Fotorama
        items={props.items}
        options={props.slider}
        style={props.style}
    />
)
