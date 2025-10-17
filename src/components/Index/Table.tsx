import Link from 'next/link'
import React from 'react'
import s from './table.module.css'

export const Table: React.FC<{ data: any[] }> = ({ data }) => (
    <div
        className={s.container}
    >
        <div className={s.header}>
            проект
        </div>
        <div className={s.header}>
            клиент
        </div>
        <div className={s.header}>
            год
        </div>
        <div className={s.header}>
            локация
        </div>
        {data.map((x, i) => (
            <React.Fragment key={i}>
                {!!x.href ? (
                    <Link href={x.href} className={s.name}>
                        {x.name}
                    </Link>
                ) : (
                    <div className={s.name}>
                        {x.name}
                    </div>
                )}
                <div className={`${s.client} ${s.mobileHidden}`}>
                    {x.client}
                </div>
                <div className={`${s.year} ${s.mobileHidden}`}>
                    {x.year}
                </div>
                <div
                    className={`${s.location} ${s.mobileHidden}`}
                >
                    {x.location}
                </div>
            </React.Fragment >
        ))}
    </div >
)
