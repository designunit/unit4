import ReactCompareImage from 'react-compare-image'

export type BeforeAfterProps = {
    before: string
    after: string
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ before, after, ...props }) => {
    return (
        <ReactCompareImage
            {...props}
            leftImage={before}
            rightImage={after}
            aspectRatio='wider'
        />
    )
}
