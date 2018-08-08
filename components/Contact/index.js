import './styles.less'

export default ({href, target, children, mix}) => (
    <span className={`contact ${mix}`}>
        <a
            href={href}
            target={target}
        >
            {children}
        </a>
    </span>
)
