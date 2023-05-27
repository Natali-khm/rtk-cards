import { PayloadAction, createSlice, current } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'app',
    initialState: {
        error: null as string | null,
        isLoading: true,
        isAppInitialized: false,
    },
    reducers: {
        setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
            console.log(current(state))
            state.isLoading = action.payload.isLoading
        },
        setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
            state.error = action.payload.error
        },
        initialization: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
            state.isAppInitialized = action.payload.isInitialized
        }
    },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
