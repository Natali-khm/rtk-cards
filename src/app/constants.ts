import { isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
import { authThunks } from '../features/auth/auth.slice'

const pending = isPending(
    authThunks.register,
    authThunks.login,
    authThunks.logout,
    authThunks.forgotPassword,
    authThunks.setNewPassword,
    authThunks.updateProfile
)

const fulfilled = isFulfilled(
    authThunks.register,
    authThunks.login,
    authThunks.logout,
    authThunks.forgotPassword,
    authThunks.setNewPassword,
    authThunks.updateProfile
)

const rejected = isRejected(
    authThunks.register,
    authThunks.login,
    authThunks.logout,
    authThunks.forgotPassword,
    authThunks.setNewPassword,
    authThunks.updateProfile
)

export { pending, fulfilled, rejected }
