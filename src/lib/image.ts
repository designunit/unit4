export interface IResizeImage {
    w: number
    h: number
}

export function resizeImage(src: string, options: IResizeImage): string {
    return `https://images.weserv.nl/?url=${src}&w=${options.w}&h=${options.h}&n=-1`
}
