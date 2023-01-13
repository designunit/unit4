import { BlackHighlight } from '../BlackHighlight'
import { Flex } from '../Flex'

export interface IProjectHeaderProps {
    description: JSX.Element | string
    location: JSX.Element | string
    client: JSX.Element | string
    phase: JSX.Element | string
    partners: JSX.Element | string
    year: JSX.Element | string
}

export const ProjectHeader: React.FC<IProjectHeaderProps> = ({
    description,
    location,
    client,
    phase,
    partners,
    year,
    ...props
}) => (
    <>
        <Flex>
            <div>
                {description}
            </div>
            <div>
                <p><BlackHighlight>место:</BlackHighlight>{' '}{location}</p>
                <p><BlackHighlight>заказчик:</BlackHighlight>{' '}{client}</p>
                <p><BlackHighlight>стадия:</BlackHighlight>{' '}{phase}</p>
                <p><BlackHighlight>партнеры:</BlackHighlight>{' '}{partners}</p>
                {year}
            </div>
        </Flex>
    </>
)
