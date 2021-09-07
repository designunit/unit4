import s from './threeButtons.module.css'

const buttons = [
    {
        text: 'СРЕДОВОЕ ПРОЕКТИРОВАНИЕ',
        src: '/static/wip.png',
        href: '#enviromental-design',
    },
    {
        text: 'ОБРАЗОВАНИЕ',
        src: '/static/wip.png',
        href: '#education',
    },
    {
        text: 'СОФТ',
        src: '/static/wip.png',
        href: '#soft',
    },
]

export const ThreeButtons = () => (
    <div
        className={s.container}
        >
        {buttons.map(x => (
            <a
                href={x.href}
                onClick={e => {
                    if (!document) return
                    e.preventDefault();
                    const destination = document.querySelector(x.href as string);
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
                        filter: '',
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    height: '100%',
                    background: '#FF006666',
                }} />
                <span style={{
                    position: 'absolute',
                    zIndex: 2,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    fontSize: 30,
                    fontWeight: 700,
                }}>

                    {x.text}
                </span>
            </a>
        ))}
    </div>
)