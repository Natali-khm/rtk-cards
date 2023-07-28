import {
    authLoggedIn,
    authMailSent,
    authEmail,
    authPasswordIsSet,
    profile,
    authInitialized,
    appIsLoading,
    profileIdS,
} from '../auth.selectors'
import { useAppSelector } from 'common/hooks'

export const useAuthSelectors = () => {
    const email = useAppSelector(authEmail)
    const isLoggedIn = useAppSelector(authLoggedIn)
    const isMailSent = useAppSelector(authMailSent)
    const isPasswordSet = useAppSelector(authPasswordIsSet)
    const userProfile = useAppSelector(profile)
    const profileId = useAppSelector(profileIdS)
    const isInitialized = useAppSelector(authInitialized)
    const isLoading = useAppSelector(appIsLoading)

    return {
        isLoggedIn,
        isMailSent,
        email,
        isPasswordSet,
        isInitialized,
        userProfile,
        isLoading,
        profileId,
    }
}
