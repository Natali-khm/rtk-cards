import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

import { useAuthSelectors } from 'features/auth/hooks'
import { authThunks } from 'features/auth/auth.slice'
import { useAppDispatch } from 'common/hooks'
import { Header } from 'common/components'
import { AppOutlet } from './AppOutlet'
import { useEffect } from 'react'

export function App() {
    const dispatch = useAppDispatch()
    const { isInitialized, isLoggedIn, isLoading } = useAuthSelectors()

    useEffect(() => {
        dispatch(authThunks.isAuth())
    }, [])

    return (
        <>
            <Header />
            <Box sx={{ height: '4px' }}>{isLoading && <LinearProgress />}</Box>
            {!isInitialized && 'Initialization'}
            {isInitialized && isLoggedIn !== null && <AppOutlet />}
        </>
    )
}
