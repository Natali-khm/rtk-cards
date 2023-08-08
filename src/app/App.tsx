import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

import { useAuthSelectors } from 'features/auth/hooks'
import { authThunks } from 'features/auth/auth.slice'
import { useAppDispatch } from 'common/hooks'
import { Header } from 'common/components'
import { AppOutlet } from './AppOutlet'
import { useEffect } from 'react'
import { CommonAppModal } from 'features/modals/CommonAppModal'
import { useAppSelectors } from './hooks/useAppSelectors'

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
            {!appInitialized && 'Initialization'}
            {appInitialized && isLoggedIn !== null && <AppOutlet />}
            <CommonAppModal />
        </>
    )
}
