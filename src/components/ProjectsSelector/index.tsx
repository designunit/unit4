import s from './index.module.css'
import cx from 'classnames'
import React from 'react'
import Media from 'react-media'
import { MoreOutlined } from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'

type ProjectsSelectorProps = {
    setTag: React.Dispatch<React.SetStateAction<string>>
    tags: string[]
    selected: string
}

export const ProjectsSelector: React.FC<ProjectsSelectorProps> = ({ setTag, tags, selected }) => {
    return (
        <Media queries={{
            mobile: "(max-width: 31.25em)",
        }}>
            {matches => matches.mobile ? (
                <Dropdown
                    overlay={(
                        <Menu
                            className={s.menu}
                            activeKey={selected}
                            onClick={({ key }) => setTag(key as string)}
                        >
                            {tags.map(tag => (
                                <Menu.Item
                                    className={selected == tag && s.selected}
                                    key={tag}
                                >
                                    {tag}
                                </Menu.Item>
                            ))}
                        </Menu>
                    )}
                >
                    <div className={s.select}>
                        {selected}
                        <MoreOutlined />
                    </div>
                </Dropdown>
            ) : (
                <ul className={s.container}>
                    {tags.map(tag => (
                        <li key={tag} className={cx(s.item, tag == selected && s.selected)}
                            onClick={() => setTag(tag)}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            )}
        </Media>
    )
}