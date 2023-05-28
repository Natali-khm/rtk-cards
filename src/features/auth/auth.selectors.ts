import { RootState } from 'app/store'

const authLoggedIn = (state: RootState) => state.auth.isLoggedIn
const authMailSent = (state: RootState) => state.auth.passwordRecovery.isMailSent
const authEmail = (state: RootState) => state.auth.passwordRecovery.email
const authPasswordIsSet = (state: RootState) => state.auth.passwordRecovery.isPasswordSet
const profile = (state: RootState) => state.auth.profile
const authInitialized = (state: RootState) => state.app.isAppInitialized

export { authLoggedIn, authMailSent, authEmail, authPasswordIsSet, profile, authInitialized }
