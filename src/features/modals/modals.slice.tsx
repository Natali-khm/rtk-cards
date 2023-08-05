import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'modals',
    initialState: {
        isOpen: false,
        title: '' as string,
        data: {} as any, // FIX
    },
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
        setModal: (state, action: PayloadAction<{title: string, data: any}>) => {
            // FIX
            state.data = action.payload.data
            state.title = action.payload.title
        },
    },
})

export const modalReducer = slice.reducer
export const modalActions = slice.actions
