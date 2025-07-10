import { Flex } from '../Flex'
import s from './tableButtons.module.css'

export const TableButtons: React.FC = () => {
    return (
        <div className={s.container}>
            <Flex>
                <a href='#masterplans'
                    style={{
                        textAlign: 'center',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                    }}
                >
                    мастерпланы
                </a>
                <a href='#cityspace'
                    style={{
                        textAlign: 'center',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                    }}
                >
                    городская среда
                </a>
                <a href='#digitalspace'
                    style={{
                        textAlign: 'center',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                    }}
                >
                    цифровая среда
                </a>
            </Flex>
        </div>
    )
}
