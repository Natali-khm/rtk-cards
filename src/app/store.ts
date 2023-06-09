import { appReducer } from './app.slice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { authReducer } from '../features/auth/auth.slice';
import { packsReducer } from '../features/packs/packs.slice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        app: appReducer,
        auth: authReducer,
        packs: packsReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<      //used in counter
   ReturnType,
    RootState,
    unknown,
    Action<string>
>
