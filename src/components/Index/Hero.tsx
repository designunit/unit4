import { Flex } from '../Flex'
import s from './hero.module.css'
import { IndexGallery } from './IndexGallery'

export const Hero: React.FC = () => {
    return (
        <div
            className={s.container}
        >
            <p style={{
                fontSize: '1.5rem',
                maxWidth: 'max(55vw, 500px)',
                margin: '0 auto',
            }}>
                <span style={{ fontWeight: 'bold' }}>
                    {'unit4.io — архитектурная студия из Санкт-Петербурга. '}
                </span>
                Работаем с 2017 года.
                {/* Мы — команда экспертов пространственного развития, архитекторов и конструкторов, ГИС-аналитиков и разработчиков цифровых продуктов, специалистов по социокультурному проектированию и ландшафтных инженеров. */}
            </p>

            <IndexGallery />

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
