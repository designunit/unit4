import { initial, tail, zip } from 'lodash'

export function moveItemByIndex<T>(items: T[], index: number, direction: number): T[] {
    const item = items[index]

    const no = items.filter((_, i) => i !== index)
    no.splice(index + direction, 0, item)

    return no
}

export function arrayToDomains<T>(items: T[]): [T, T][] {
    const xs = zip(
        initial(items),
        tail(items),
    )
    // TODO: extra iteration: drop lodash zip to fix
    return xs.map(([a, b]) => [a!, b!])
}
