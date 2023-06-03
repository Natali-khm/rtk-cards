import { authLoggedIn, authMailSent, authEmail, authPasswordIsSet, profile, authInitialized } from '../auth.selectors'
import { useAppSelector } from 'common/hooks'

export const useAuthSelectors = () => {
    const email = useAppSelector(authEmail)
    const isLoggedIn = useAppSelector(authLoggedIn)
    const isMailSent = useAppSelector(authMailSent)
    const isPasswordSet = useAppSelector(authPasswordIsSet)
    const userProfile = useAppSelector(profile)
    const isInitialized = useAppSelector(authInitialized)

    return {
        isLoggedIn,
        isMailSent,
        email,
        isPasswordSet,
        isInitialized,
        userProfile,
    }
}
