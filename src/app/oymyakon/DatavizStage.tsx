import * as React from 'react'

import { Sankey } from '../../components/Dataviz/Sankey'
import { WideBlock } from '../../components/WideBlock'

import {
    sankeyDataStage1,
    sankeyDataStage2,
    sankeyDataStage3,
} from './data'
import { defaultColorSet } from './dataviz'

const datasetMap = {
    1: sankeyDataStage1,
    2: sankeyDataStage2,
    3: sankeyDataStage3,
}

export interface IDatavizStageProps {
    stage: 1 | 2 | 3
}

const DatavizStage = (props: IDatavizStageProps) => {
    const sankeyAspectRatio = 2.5
    const sankeyStyle: React.CSSProperties = {
        backgroundColor: 'white',
        color: 'black',
        minWidth: 1200,
        padding: 10,
    }
    const sankeyWrapperStyle: React.CSSProperties = {
        overflowX: 'auto',
    }
    const dataset = datasetMap[props.stage]

    return (
        <WideBlock style={sankeyWrapperStyle}>
            <Sankey
                containerAspectRatio={sankeyAspectRatio}
                showLegend={false}
                style={sankeyStyle}
                data={dataset}
                defaultColorSet={defaultColorSet}
            />
        </WideBlock>
    )
}

export default DatavizStage
