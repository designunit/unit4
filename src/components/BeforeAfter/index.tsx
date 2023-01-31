import ReactCompareImage from 'react-compare-image'

export const BeforeAfter = ({ before, after, ...props }) => {
    return (
        <ReactCompareImage
            {...props}
            leftImage={before}
            rightImage={after}
            aspectRatio='wider'
        />
    )
}
