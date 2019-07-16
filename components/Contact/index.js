import './styles.less'

export default (props) => (
    <span className={`contact ${props.mix}`}>
        <a
            href={props.href}
            target={props.target}
        >
            {props.children}
        </a>
    </span>
)
