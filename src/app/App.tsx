import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../common/hooks/hooks'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import { Header } from 'common/components/header/Header'
import { authThunks } from '../features/auth/auth.slice'

export function App() {
    // const isLoading = useAppSelector((state) => state.app.isLoading)

    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector((state) => state.app.isAppInitialized)
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)    

    useEffect(() => {
        dispatch(authThunks.isAuth())
    }, [])

    return (
        <>
            <Header />
            <Container /* sx={{ backgroundColor: 'red' }}  */ maxWidth={'xl'}>
                {isInitialized && isLoggedIn !== null ? <Outlet /> : <div>Loading</div>}
            </Container>
        </>
    )
}
