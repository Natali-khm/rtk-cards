import { useEffect } from 'react'
import { useAppDispatch } from './hooks'
import { Counter } from '../features/counter/Counter'
import { appActions } from './app.slice'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import { Header } from 'common/components/header/Header'
import { authThunks } from '../features/auth/auth.slice'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'

export function App() {
    // const isLoading = useAppSelector((state) => state.app.isLoading)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(authThunks.isAuth())
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
