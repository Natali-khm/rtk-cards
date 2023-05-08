import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import { Counter } from '../features/counter/Counter'
import { appActions } from './app.slice'
import './App.css'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'

export function App() {
    const isLoading = useAppSelector((state) => state.app.isLoading)

    const dispatch = useAppDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(appActions.setIsLoading({ isLoading: false }))
        }, 3000)
    }, [])

    return (
        <Container  /* sx={{ backgroundColor: 'red' }}  */  maxWidth={'xl'}>
            <Outlet />
        </Container>
    )
}
