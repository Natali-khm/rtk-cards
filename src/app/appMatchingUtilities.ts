import { isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'

import { packsThunks } from 'features/packs/packs.slice'
import { cardsThunks } from 'features/cards/cards.slice'
import { authThunks } from 'features/auth/auth.slice'
import { learnThunks } from '../features/learn/learn.slice'

const pending = isPending(
    authThunks.register,
    authThunks.login,
    authThunks.logout,
    authThunks.forgotPassword,
    authThunks.setNewPassword,
    authThunks.updateProfile,
    packsThunks.getPacks,
    packsThunks.deletePack,
    packsThunks.updatePack,
    packsThunks.addPack,
    // cardsThunks.getCards,
    cardsThunks.addCard,
    cardsThunks.deleteCard,
    cardsThunks.updateCard,
)

const fulfilled = isFulfilled(
    authThunks.register,
    authThunks.login,
    authThunks.logout,
    authThunks.forgotPassword,
    authThunks.setNewPassword,
    authThunks.updateProfile,
    packsThunks.getPacks,
    packsThunks.deletePack,
    packsThunks.updatePack,
    packsThunks.addPack,
    // cardsThunks.getCards,
    cardsThunks.addCard,
    cardsThunks.deleteCard,
    cardsThunks.updateCard,
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
    packsThunks.updatePack,
    packsThunks.addPack,
    // cardsThunks.getCards,
    cardsThunks.addCard,
    cardsThunks.deleteCard,
    cardsThunks.updateCard,
)

export { pending, fulfilled, rejected }
