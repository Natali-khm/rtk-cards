import { appInitializedS, appLoadingS } from './app.selectors'
import { useAppSelector } from 'common/hooks'

export const useAppSelectors = () => {
    const appInitialized = useAppSelector(appInitializedS)
    const isAppLoading = useAppSelector(appLoadingS)

    return {
        appInitialized,
        isAppLoading,
    }
}
