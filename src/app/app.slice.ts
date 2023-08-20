import { fulfilled, pending, rejected } from './appMatchingUtilities'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'app',
    initialState: {
        error: null as string | null,
        isLoading: false,
        isAppInitialized: false,
    },
    reducers: {
        setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
            state.error = action.payload.error
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => {
                    return action.type.endsWith('/isAuth/fulfilled') || action.type.endsWith('/isAuth/rejected')
                },
                (state) => {
                    state.isAppInitialized = true
                    state.isLoading = false
                }
            )
            .addMatcher(pending, (state) => {
                state.isLoading = true
            })
            .addMatcher(fulfilled, (state) => {
                state.isLoading = false
            })
            .addMatcher(rejected, (state, action) => {
                if (action.payload) state.error = action.payload
                state.isLoading = false
            })
    },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
