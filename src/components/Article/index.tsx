export type ArticleProps = {
    children: React.ReactNode
}

export const Article: React.FC<ArticleProps> = ({ children }) => (
    <article>
        {children}
    </article>
)

