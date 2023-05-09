import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import { Counter } from '../features/counter/Counter'
import { appActions } from './app.slice'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import { Header } from 'common/components/header/Header'

export function App() {
    const isLoading = useAppSelector((state) => state.app.isLoading)

    const dispatch = useAppDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(appActions.setIsLoading({ isLoading: false }))
        }, 3000)
    }, [])

    return (
        <>
            <Header />
            <Container /* sx={{ backgroundColor: 'red' }}  */ maxWidth={'xl'}>
                <Outlet />
            </Container>
        </>
    )
}
