import s from './index.module.css'
import cx from 'classnames'

type ProjectsSelectorProps = {
    setTag: React.Dispatch<React.SetStateAction<string>>
    tags: string[]
    selected: string
}

export const ProjectsSelector: React.FC<ProjectsSelectorProps> = ({ setTag, tags, selected }) => {
    return (
        <ul className={s.container}>
            {tags.map(tag => (
                <li key={tag} className={cx(s.item, tag == selected && s.selected)}
                    onClick={() => setTag(tag)}
                >
                    {tag}
                </li>
            ))}
        </ul>
    )
}