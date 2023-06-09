import { useAppSelector, useAppDispatch } from 'common/hooks'
import LinearProgress from '@mui/material/LinearProgress'
import { useAuthSelectors } from 'features/auth/hooks'
import { authThunks } from 'features/auth/auth.slice'
import { Header } from 'common/components'
import { AppOutlet } from './AppOutlet'
import { useEffect } from 'react'

export function App() {
    const isLoading = useAppSelector((state) => state.app.isLoading)
    const dispatch = useAppDispatch()
    const { isInitialized, isLoggedIn } = useAuthSelectors()

    useEffect(() => {
        dispatch(authThunks.isAuth())
    }, [])

    return (
        <>
            <Header />
            <div>{isLoading && <LinearProgress />}</div>
            {!isInitialized && 'Initialization'}
            {isInitialized && isLoggedIn !== null && <AppOutlet />}
        </>
    )
}
