import { RootState } from 'app/store'

const authLoggedIn = (state: RootState) => state.auth.isLoggedIn
const authMailSent = (state: RootState) => state.auth.passwordRecovery.isMailSent
const authEmail = (state: RootState) => state.auth.passwordRecovery.email
const authPasswordIsSet = (state: RootState) => state.auth.passwordRecovery.isPasswordSet

export { authLoggedIn, authMailSent, authEmail, authPasswordIsSet }
