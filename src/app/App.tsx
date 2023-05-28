import { useEffect } from 'react'
import { Layout } from './Layout'
import { Header } from 'common/components/header/Header'
import { authThunks } from '../features/auth/auth.slice'
import LinearProgress from '@mui/material/LinearProgress'
import { useAppSelector } from 'common/hooks'
import { useAppDispatch } from 'common/hooks'
import { useAuth } from '../features/auth/hooks/useAuth'

export function App() {
    const isLoading = useAppSelector((state) => state.app.isLoading)
    const dispatch = useAppDispatch()

    const { isInitialized, isLoggedIn } = useAuth()

    useEffect(() => {
        dispatch(authThunks.isAuth())
    }, [])

    return (
        <>
            <Header />
            <div>{isLoading && <LinearProgress />}</div>
            {!isInitialized && 'Initialization'}
            {isInitialized && isLoggedIn !== null && <Layout />}
        </>
    )
}
