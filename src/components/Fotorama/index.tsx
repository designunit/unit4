import * as React from 'react'

export interface IFotoramaOptions {
    transition: 'slide' | 'crossfade'
    autoplay?: boolean | number
    allowfullscreen?: boolean
}

export interface IFotoramaProps {
    items: string[]
    options: IFotoramaOptions
}

export class Fotorama extends React.PureComponent<IFotoramaProps> {
    private ref: React.RefObject<HTMLDivElement>

    constructor(props) {
        super(props)

        this.ref = React.createRef()
    }

    public componentDidMount() {
        const $ = window['jQuery'] // tslint:disable-line
        if ($) {
            $(this.ref.current).fotorama(this.props.options)
        }
    }

    public render() {
        return (
            <div ref={this.ref}>
                {this.props.items.map((x, i) => (
                    <img src={x} />
                ))}
            </div>
        )
    }
}
