import s from './threeButtons.module.css'
import Image from 'next/image'
import React from 'react'

const buttons = [
    {
        text: 'СРЕДОВОЕ ПРОЕКТИРОВАНИЕ',
        src: '/static/indexDesign.jpg',
        href: '#enviromental-design',
    },
    {
        text: 'ОБРАЗОВАНИЕ',
        src: '/static/indexEducation.jpg',
        href: '#education',
    },
    {
        text: 'СОФТ',
        src: '/static/indexSoft.jpg',
        href: '#soft',
    },
]

export const ThreeButtons: React.FC<{ state: string }> = ({ state }) => (
    <div
        className={s.container}
    >
        {buttons.map((x, i) => (
            <a
                key={i}
                href={x.href}
                onClick={e => {
                    if (!document) return
                    e.preventDefault()
                    const destination = document.querySelector(x.href as string)
                    if (destination) {
                        destination.scrollIntoView({
                            behavior: 'smooth',
                        })
                    }
                }}
                style={{
                    position: 'relative',
                    flex: '1 0 30%',
                    height: 130,
                }}
            >
                <Image
                    src={x.src}
                    className={`${s.img} ${x.href == state && s.imgSelected}`}
                    layout='fill'
                    objectFit='cover'
                />
                {/* <div style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    height: '100%',
                    background: x.href == state ? 'transparent' : '#FF006666',
                    transition: 'background .5s ease',
                }} /> */}
                <span
                    className={s.text}
                >
                    {x.text}
                </span>
            </a>
        ))}
    </div>
)

export const ThreeButton: React.FC<{ index: 0 | 1 | 2 }> = ({ index }) => {
    const x = buttons[index]
    return (
        <div
            style={{
                display: 'flex',
                marginBottom: 50,
            }}
        >
            <div
                key={index}
                style={{
                    position: 'relative',
                    flex: '1 0 30%',
                    height: 130,
                }}
            >
                <Image
                    src={x.src}
                    className={`${s.img}`}
                    layout='fill'
                    objectFit='cover'
                />
                <span
                    className={s.text}
                >
                    {x.text}
                </span>
            </div>
        </div>
    )
}