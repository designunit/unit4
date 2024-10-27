import { createGradient } from './gradient'

export type TitleProps = {
    children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ children }) => (
    <h2 style={{
        background: createGradient(),
    }}>
        <style jsx>{`
            h2 {
                display: inline;

                font-size: var(--font-h2-size);
                text-transform: uppercase;
                padding: 2px 2px;
                background: rgb(255,0,255);
                color: #fff;
            }
        `}</style>

        {children}
    </h2>
)

export default Title
