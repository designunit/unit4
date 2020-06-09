export interface ResizeImage {
    w: number
    h: number
    fit?: 'inside' | 'cover'
}

export function resizeImage(src: string, options: ResizeImage): string {
    return src
    // const fit = options.fit ?? 'inside'
    // return `https://images.weserv.nl/?url=${src}&w=${options.w}&h=${options.h}&fit=${fit}&n=-1`
}
