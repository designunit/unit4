'use client'

import { ResponsiveSankey } from '@nivo/sankey'

export interface INivoNode {
    id: string,
    color?: string,
}

export interface INivoLink {
    source: string,
    target: string,
    value: number,
}

interface ISankeyProps {
    data: {
        links: INivoLink[]
        nodes: INivoNode[],
    }
    defaultColorSet: string[]
    showLegend: boolean
    layout?: 'vertical' | 'horizontal'
    labelLayout?: 'vertical' | 'horizontal'
}

const NivoSankey = ResponsiveSankey as any

export const Sankey: React.FC<ISankeyProps> = ({
    layout = 'horizontal',
    labelLayout = 'horizontal',
    ...props },
) => {
    const defaultColorSetSize = props.defaultColorSet.length
    const legendWidth = 200
    const marginRight = props.showLegend ? legendWidth : 0
    const margin = {
        bottom: 0,
        left: 0,
        right: marginRight,
        top: 0,
    }

    const linkedIds = props.data.links.reduce(
        (acc, x) => acc.add(x.source).add(x.target),
        new Set<string>(),
    )

    const data = {
        links: props.data.links,
        nodes: props.data.nodes
            .filter(node => {
                return linkedIds.has(node.id)
            })
            .map((node, index) => {
                const color = props.defaultColorSet[index % defaultColorSetSize]

                if (!node.color) {
                    return {
                        ...node,
                        color,
                    }
                }

                return node
            })

        ,
    }

    return (
        <NivoSankey
            data={data}
            margin={margin}
            layout={layout}
            align={'justify'}
            colors={(node: any) => {
                if (node.id) {
                    return node.color
                }
            }}
            nodeOpacity={1}
            nodeThickness={18}
            nodeInnerPadding={2}
            nodeSpacing={4}
            nodeBorderWidth={0}
            // nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
            linkOpacity={0.5}
            linkHoverOthersOpacity={0.1}
            enableLinkGradient={true}
            label={'label'}
            // labelPosition="outside"
            // labelOrientation={'horizontal'}
            // enableLabels={false}
            labelOrientation={labelLayout}
            labelPadding={8}
            // labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
            animate={false}
            // motionStiffness={140}
            // motionDamping={13}
            legends={!props.showLegend ? [] : [
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000',
                            },
                        },
                    ],
                    itemDirection: 'right-to-left',
                    itemHeight: 14,
                    itemTextColor: '#999',
                    itemWidth: legendWidth,
                    itemsSpacing: 2,
                    symbolSize: 14,
                    translateX: legendWidth,
                    translateY: -20,
                },
            ]}
        />
    )
}
