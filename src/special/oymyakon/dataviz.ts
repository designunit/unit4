import flatMap from 'lodash/flatMap'
import type { INivoLink } from './Sankey'
import { arrayToDomains } from '@/lib/array'

export function collect(transitions: Array<[number, string[]]>): INivoLink[] {
    const result = flatMap(transitions, link => {
        const value = link[0] as number
        const transition = link[1] as string[]
        const ts = arrayToDomains(transition)

        return ts.map(([source, target]) => ({
            source,
            target,
            value,
            key: `${source}-${target}`,
        }))
    }).reduce((acc, link) => {
        const stored = acc.has(link.key) ? acc.get(link.key) : {
            source: link.source,
            target: link.target,
            value: 0,
        }
        const value = stored!.value + link.value
        acc.set(link.key, {
            source: stored!.source,
            target: stored!.target,
            value,
        })
        return acc
    }, new Map<string, INivoLink>())

    return Array.from(
        result.values(),
    )
}

export const defaultColorSet = ['#4a799b', '#617da1', '#7f82a9', '#a288b2', '#c58ebc', '#ed96c7']
