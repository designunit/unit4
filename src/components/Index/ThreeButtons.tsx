import s from './threeButtons.module.css'

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

export const ThreeButtons = ({ state }) => (
    <div
        className={s.container}
    >
        {buttons.map(x => (
            <a
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
                    height: 170,
                }}>
                <img
                    src={x.src}
                    style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        filter: x.href == state ? 'grayscale(1)' : '',
                        transition: 'filter .5s ease'
                    }}
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