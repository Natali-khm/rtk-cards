import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useRedirect = (path: string, condition: boolean | null) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (condition) {
            navigate(path)
        }
    }, [condition])
}
