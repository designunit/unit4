import * as React from 'react'

export interface IUnitCanvasProps {
    marginTop: number
}

export default class UnitCanvas extends React.Component<IUnitCanvasProps, {}> {
    public running = false

    private angle: number
    private frameId: number
    private frame: number

    private canvas: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D

    private imgRef: React.RefObject<HTMLImageElement>
    private stopTimeout: NodeJS.Timeout

    constructor(props: IUnitCanvasProps) {
        super(props)

        this.angle = -(Math.random() * Math.PI)
        this.imgRef = React.createRef()
    }

    public componentDidMount() {
        window.addEventListener('resize', this.onResize)

        this.init()
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
        this.stopLoop()
    }

    public startLoop() {
        if (this.running) {
            return
        }

        this.frameId = window.requestAnimationFrame(this.loop)
        this.running = true
    }

    public stopLoop() {
        window.cancelAnimationFrame(this.frameId)

        this.running = false
    }

    public render() {
        return (
            <div>
                <style jsx>{`
                    div {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    canvas {
                        position: absolute;
                        top: 0;
                        left: 0;

                        width: 100%;
                        height: 100%;

                        z-index: -1;

                        mix-blend-mode: multiply;
                    }

                    img {
                        width: 100%;
                        margin-top: ${this.props.marginTop}px;

                        filter: invert(100%);
                    }
                `}</style>

                <canvas
                    ref={this.onRef}
                />

                <img
                    ref={this.imgRef}
                    src={'/static/logo_full.png'}
                />
            </div>
        )
    }

    private onResize = () => {
        this.stopLoop()
        this.init()
    }

    private loop = () => {
        const ctx = this.ctx
        const image = this.imgRef.current

        if (!image) {
            return this.stopLoop()
        }

        if (image.complete) {
            const dx = Math.cos(this.angle)
            const dy = Math.sin(this.angle)
            const s = 2
            const x = this.frame * dx * s
            const y = this.frame * dy * s

            ctx.drawImage(
                image,
                image.offsetLeft + x,
                image.offsetTop + y,
                image.offsetWidth,
                image.offsetHeight,
            )
            this.frame ++
        }

        if (this.running) {
            this.frameId = window.requestAnimationFrame(this.loop)
        }
    }

    private onRef = (canvas: HTMLCanvasElement) => {
        if (!canvas) {
            return
        }
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')
    }

    private init() {
        this.canvas.width = document.documentElement.clientWidth
        this.canvas.height = document.documentElement.clientHeight

        this.frame = 0
        this.startLoop()

        clearTimeout(this.stopTimeout)
        this.stopTimeout = setTimeout(() => {
            this.stopLoop()
        }, 15000)
    }
}
