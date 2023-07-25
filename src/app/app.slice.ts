import { PayloadAction, createSlice, current } from '@reduxjs/toolkit'
import { fulfilled, pending, rejected } from './appMatchingUtilities'

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
            .addMatcher(pending, (state) => {
                state.isLoading = true
            })
            .addMatcher(fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addMatcher(
                (action) => {
                    return action.type.endsWith('/isAuth/fulfilled') || action.type.endsWith('/isAuth/rejected')
                },
                (state) => {
                    state.isAppInitialized = true
                }
            )
            .addMatcher(rejected, (state, action) => {
                if (action.payload) state.error = action.payload /// TODO
                state.isLoading = false
            })
    },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
