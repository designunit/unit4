import { ImageProps } from '@/types'
import { Fotorama, IFotoramaOptions } from '../Fotorama'

export type CarouselProps = {
    size?: number
    images: ImageProps[]
    slider: IFotoramaOptions,
    style?: React.CSSProperties
}

export const Carousel: React.FC<CarouselProps> = props => (
    <Fotorama
        items={props.images}
        options={props.slider}
        style={props.style}
    />
)
