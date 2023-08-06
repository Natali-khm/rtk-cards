import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'modals',
    initialState: {
        isOpen: false,
        modalAction: '' as string,
        data: {} as any, // FIX
    },
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
        setModal: (state, action: PayloadAction<{modalAction: string, data: any}>) => {
            // FIX
            state.data = action.payload.data
            state.modalAction = action.payload.modalAction
        },
    },
})

export const modalReducer = slice.reducer
export const modalActions = slice.actions
