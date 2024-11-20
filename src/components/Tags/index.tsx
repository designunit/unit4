import s from './tags.module.css'
import React from 'react'

export type TagsProps = {
    children: string[]
}

export const Tags: React.FC<TagsProps> = ({children}) => (
    <div className={s.tags}>
        {React.Children.map(children, (x, i) => (
            <span key={i}>{x}</span>
        ))}
    </div>
)
