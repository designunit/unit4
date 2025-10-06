import { useState, useEffect } from 'react'

type UseIsMobile = (breakpoint?: number, ssrDefault?: boolean) => boolean

export const useIsMobile: UseIsMobile = (breakpoint = 960, ssrDefault = true) => {
    const [isMobile, setIsMobile] = useState(ssrDefault)

    useEffect(() => {
        const checkBreakpoint = () => {
            setIsMobile(window.innerWidth < breakpoint)
        }

        checkBreakpoint()
        window.addEventListener('resize', checkBreakpoint)

        return () => {
            window.removeEventListener('resize', checkBreakpoint)
        }
    }, [breakpoint])

    return isMobile
}
