import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

import { useAuthSelectors } from 'features/auth/hooks'
import { authThunks } from 'features/auth/auth.slice'
import { AppModal } from 'features/modals/components'
import { useAppDispatch } from 'common/hooks'
import { useAppSelectors } from 'app/hooks'
import { Header } from 'common/components'
import { AppOutlet } from './AppOutlet'
import { useEffect } from 'react'

export function App() {
    const dispatch = useAppDispatch()
    const { isLoggedIn } = useAuthSelectors()
    const { appInitialized, isAppLoading } = useAppSelectors()

    useEffect(() => {
        dispatch(authThunks.isAuth())
    }, [])

    return (
        <>
            <Header />
            <Box sx={{ height: '4px' }}>{isAppLoading && <LinearProgress />}</Box>
            {appInitialized && isLoggedIn !== null && <AppOutlet />}
            <AppModal />
        </>
    )
}
