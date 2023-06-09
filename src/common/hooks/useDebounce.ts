import React, { useEffect, useState } from 'react'

export const useDebounce = (value: string, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    
    useEffect(() => {
        const timerId = setTimeout(() => setDebouncedValue(value), delay || 500)
        return () => {
            clearTimeout(timerId)
        }
    }, [value, delay])

    return debouncedValue
}
