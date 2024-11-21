'use client'

import { Sankey } from './Sankey'
import { WideBlock } from '@/components/WideBlock'

import {
    sankeyDataStage1,
    sankeyDataStage2,
    sankeyDataStage3,
} from './data'
import { defaultColorSet } from './dataviz'

const datasets = {
    1: sankeyDataStage1,
    2: sankeyDataStage2,
    3: sankeyDataStage3,
}

export type OymyakonSankeyProps = {
    stage: 1 | 2 | 3
}

const OymyakonSankey: React.FC<OymyakonSankeyProps> = ({ stage }) => (
    <WideBlock style={{
        aspectRatio: '25 / 10',
        overflowX: 'auto',
    }}>
        <Sankey
            showLegend={false}
            data={datasets[stage]}
            defaultColorSet={defaultColorSet}
        />
    </WideBlock>
)

export default OymyakonSankey
