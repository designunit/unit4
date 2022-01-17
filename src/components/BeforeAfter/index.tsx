import ReactCompareImage from 'react-compare-image'

export const BeforeAfter = ({ before, after }) => {
    return (
        <ReactCompareImage
            leftImage={before}
            rightImage={after}
            aspectRatio='wider'
        />
    )
}