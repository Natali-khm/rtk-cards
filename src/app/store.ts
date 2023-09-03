import { configureStore } from '@reduxjs/toolkit'
import { modalReducer } from 'features/modals/modals.slice'
import { cardsReducer } from 'features/cards/cards.slice'
import { learnReducer } from 'features/learn/learn.slice'
import { packsReducer } from 'features/packs/packs.slice'
import { authReducer } from 'features/auth/auth.slice'
import { appReducer } from './app.slice'

export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer,
        packs: packsReducer,
        cards: cardsReducer,
        modals: modalReducer,
        learn: learnReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
