import { useAppSelector } from 'common/hooks'
import {
    authLoggedIn,
    authMailSent,
    authEmail,
    authPasswordIsSet,
    profile,
    profileIdS,
    userNameS,
} from './auth.selectors'

export const useAuthSelectors = () => {
    const email = useAppSelector(authEmail)
    const isLoggedIn = useAppSelector(authLoggedIn)
    const isMailSent = useAppSelector(authMailSent)
    const isPasswordSet = useAppSelector(authPasswordIsSet)
    const userProfile = useAppSelector(profile)
    const profileId = useAppSelector(profileIdS)
    const userName = useAppSelector(userNameS)

    return {
        isLoggedIn,
        isMailSent,
        email,
        isPasswordSet,
        userProfile,
        profileId,
        userName,
    }
}
