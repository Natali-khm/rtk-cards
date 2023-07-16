import { isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
import { authThunks } from '../features/auth/auth.slice'
import { packsThunks } from '../features/packs/packs.slice'

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
    authThunks.updateProfile,
    packsThunks.getPacks,
    packsThunks.deletePack,
    packsThunks.updatePack
)

export { pending, fulfilled, rejected }
