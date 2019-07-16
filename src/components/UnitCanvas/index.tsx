import * as React from 'react'

export default class UnitCanvas extends React.Component {
    public running = false

    private angle: number
    private frameId: number

    private canvas: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D

    private imgRef: React.RefObject<HTMLImageElement>

    constructor(props) {
        super(props)

        this.imgRef = React.createRef()
    }

    public componentDidMount() {
        this.angle = Math.random() * 2 * Math.PI

        this.startLoop()

        setTimeout(() => {
            this.stopLoop()
        }, 5000)
    }

    public componentWillUnmount() {
        console.log('UNMOUNT')

        this.stopLoop()
    }

    public startLoop() {
        if (this.running) {
            return
        }

        this.frameId = window.requestAnimationFrame(this.loop)
        this.running = true
        // if (!this._frameId) {
        // }
    }

    public stopLoop() {
        this.running = false
        // window.cancelAnimationFrame(this._frameId);
        // // Note: no need to worry if the loop has already been cancelled
        // // cancelAnimationFrame() won't throw an error
    }

    public drawLogo(ctx, x, y, s) {
        const w = 20
        ctx.fillRect(x, y, w, w)
        ctx.fillRect(x + s, y, w, w)
        ctx.fillRect(x + s, y + s, w, w)
        ctx.fillRect(x, y + s, w, w)
    }

    public loop = () => {
        const ctx = this.ctx
        const canvas = this.canvas
        const frame = this.frameId

        const image = this.imgRef.current

        if (!image) {
            return this.stopLoop()
        }

        if (image.complete) {
            const dx = Math.cos(this.angle)
            const dy = Math.sin(this.angle)
            const s = 4
            const x = frame * dx * s
            const y = frame * dy * s

            ctx.drawImage(
                image,
                image.offsetLeft + x,
                image.offsetTop + y,
                image.offsetWidth,
                image.offsetHeight,
            )
        }

        if (this.running) {
            this.frameId = window.requestAnimationFrame(this.loop)
        }
    }

    public onRef = canvas => {
        if (!canvas) {
            return
        }
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')

        const dimension = [
            document.documentElement.clientWidth,
            document.documentElement.clientHeight,
        ]
        canvas.width = dimension[0]
        canvas.height = dimension[1]
    }

    public render() {
        return (
            <div className='unit-canvas'>
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
                    }

                    img {
                        width: 100%;
                        margin-top: 80px;

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
}
