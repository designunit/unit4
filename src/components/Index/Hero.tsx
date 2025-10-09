import { Flex } from '../Flex'
import s from './hero.module.css'

export const Hero: React.FC = () => {
    return (
        <div
            className={s.container}
        >
            <p style={{
                fontSize: '1.5rem',
                maxWidth: 'max(75vw, 500px)',
                margin: '0 auto',
                fontWeight: 'bold',
            }}>
                unit4.io — архитектурная студия из Санкт-Петербурга.
            </p>
            <p style={{
                fontSize: '1.5rem',
                maxWidth: 'max(75vw, 500px)',
                margin: '0 auto',
            }}>
                Работаем с 2017 года. Мы - команда экспертов пространственного развития, архитекторов и конструкторов, ГИС-аналитиков и разработчиков цифровых продуктов, специалистов по социокультурному проектированию и ландшафтных инженеров.
            </p>
            <div className={s.three}>
                <Flex>
                    <div>
                        25+<br />
                        регионов
                    </div>
                    <div>
                        8 лет<br />
                        развиваем города
                    </div>
                    <div>
                        70+ проектов<br />
                        разных масштабов
                    </div>
                </Flex>
            </div>
        </div>
    )
}
