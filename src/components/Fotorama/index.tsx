import { ImageProps } from '@/types'
import Image from 'next/image'
import { createRef, PureComponent } from 'react'

export interface IFotoramaOptions {
    transition: 'slide' | 'crossfade'
    autoplay?: boolean | number
    allowfullscreen?: boolean
}

export interface IFotoramaProps {
    items: ImageProps[]
    options: IFotoramaOptions
    style?: React.CSSProperties
}

export class Fotorama extends PureComponent<IFotoramaProps> {
    private ref: React.RefObject<HTMLDivElement>

    constructor(props) {
        super(props)

        this.ref = createRef()
    }

    public componentDidMount() {
        const $ = window['jQuery'] // tslint:disable-line
        if ($) {
            $(this.ref.current).fotorama(this.props.options)
        }
    }

    public render() {
        return (
            <div style={this.props.style} ref={this.ref}>
                {this.props.items.map((x, i) => (
                    <Image
                        key={x.src}
                        src={x.src}
                        width={x.width}
                        height={x.height}
                    />
                ))}
            </div>
        )
    }
}
