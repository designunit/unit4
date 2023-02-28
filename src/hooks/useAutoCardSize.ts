import { useCallback } from 'react'
import { CardSize } from '@/types'

export type AutoCardSizeFunction = (i: number) => CardSize

export function useAutoCardSize(module: number): AutoCardSizeFunction {
    const fn = useCallback((i: number): CardSize => {
        const indexCycled = i % module
        switch (indexCycled) {
            case 0:
                return CardSize.big
            case 1:
            case 2:
                return CardSize.small
            case 3:
            case 4:
            case 5:
                return CardSize.medium
            default:
                return CardSize.big
        }
    }, [module])

    return fn
}
