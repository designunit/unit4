'use client'

import ReactCompareImage from 'react-compare-image'
import s from './compare.module.css'

export type BeforeAfterProps = {
    before: string
    beforeCaption?: React.ReactNode
    after: string
    afterCaption?: React.ReactNode
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ before, after, beforeCaption, afterCaption, ...props }) => (
    <figure className={s.fig}>
        <ReactCompareImage
            {...props}
            leftImage={before}
            rightImage={after}
            aspectRatio='wider'
        />
        <div className={s.cap}>
            <figcaption className={s.left}>
                {beforeCaption}
            </figcaption>
            <figcaption className={s.right}>
                {afterCaption}
            </figcaption>
        </div>
    </figure>
)
