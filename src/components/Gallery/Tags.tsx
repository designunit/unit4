import s from './Tags.module.css'

export type TagsProps = {
    items: string[]
}

export const Tags = (props: TagsProps) => (
    <div className={s.tags}>
        {props.items.map((x, i) => (
            <span key={i}>{x}</span>
        ))}
    </div>
)
