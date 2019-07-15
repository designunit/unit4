import React from 'react'

import './styles.less'

function rnd(min, max) {
    return min + (max - min) * Math.random()
}

export default class UnitCanvas extends React.Component {
    running = false

    componentDidMount() {
        this.startLoop()

        setTimeout(() => {
            this.stopLoop()
        }, 5000)
    }

    componentWillUnmount() {
        this.stopLoop()
    }

    startLoop() {
        if (this.running) return 

        this._frameId = window.requestAnimationFrame(this.loop)
        this.running = true
        // if (!this._frameId) {
        // }
    }


    stopLoop() {
        this.running = false
        // window.cancelAnimationFrame(this._frameId);
        // // Note: no need to worry if the loop has already been cancelled
        // // cancelAnimationFrame() won't throw an error
    }

    drawLogo(ctx, x, y, s) {
        const w = 20
        ctx.fillRect(x, y, w, w)
        ctx.fillRect(x + s, y, w, w)
        ctx.fillRect(x + s, y + s, w, w)
        ctx.fillRect(x, y + s, w, w)
    }

    loop = () => {
        const ctx = this.ctx
        const frame = this.frameId

        const startX = 250
        const startY = 400
        const startLogoX = 530
        const startLogoY = -100

        const dx = Math.cos(this.angle)
        const dy = Math.sin(this.angle)
        const s = 4
        const x = startX + frame * dx * s
        const y = startY + frame * dy * s

        // this.angle += Date.now() * 0.00000000000001
        // this.angle += Math.random() * 0.01
        // this.angle += rnd(-0.01, 0.01)
        // this.angle += 0.01

        const fontSize = 172
        ctx.font = `${fontSize}px sans-serif`;

        ctx.fillStyle = "#000000";
        ctx.fillText("design   unit", x, y)
        this.drawLogo(ctx, x + startLogoX, y + startLogoY, 80)

        ctx.fillStyle = "#ffffff";
        this.drawLogo(ctx, startX + startLogoX, startY + startLogoY, 80)
        ctx.fillText("design   unit", 250, 400)

        if (this.running) {
            this.frameId = window.requestAnimationFrame(this.loop)
        }
    }

    // loop1 = () => {
    //     const ctx = this.ctx
    //     const frame = this.frameId
    //     // ctx.fillRect(0, 0, 100, 100)

    //     // const x = 10 + rnd(-10, 10)
    //     // const y = 150 + rnd(-10, 10)

    //     const dx = Math.cos(this.angle)
    //     const dy = Math.sin(this.angle)
    //     const s = 2.5
    //     const x = 250 + frame * dx * s
    //     const y = 400 + frame * dy * s

    //     ctx.font = '144px sans-serif';

    //     ctx.fillStyle = "#000000";
    //     ctx.fillText("design: :unit", x, y)

    //     // ctx.fillStyle = "#ffffff";
    //     // ctx.fillText("design: :unit", 250, 400)

    //     this.frameId = window.requestAnimationFrame(this.loop)
    // }

    onRef = canvas => {
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')

        var dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight];
        canvas.width = dimension[0];
        canvas.height = dimension[1];

        this.angle = Math.random() * 2 * Math.PI

        console.log(canvas.width, canvas.height)
    }

    render() {
        return (
            <div className='unit-canvas'>
                <canvas
                    ref={this.onRef}
                // width={'100%'}
                // height={'100%'}
                />
            </div>
        )
    }
}
