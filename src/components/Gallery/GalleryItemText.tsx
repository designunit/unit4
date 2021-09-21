type GalleryItemTextProps = {
    title: string | JSX.Element 
    text: string | JSX.Element
}

export const GalleryItemText: React.FC<GalleryItemTextProps> = ({ title, text }) => (
    <>
        <style jsx>{`
            .title {
                font-size: 17px;
                line-height: 19px;
                text-transform: uppercase;
                margin-bottom: .5rem;
                text-decoration: underline;
            }

            .text {
                font-size: 12px;
                line-height: 19px;
                text-decoration: none;
            }

            @media screen and (max-width: 31.25em) {
                .text {
                    display: none;
                }
            }
        `}</style>
        <div
            className={'title'}
        >
            {title}
        </div>
        <span
            className={'text'}
        >
            {text}
        </span>
    </>
)