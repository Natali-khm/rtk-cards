import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
    modalAction: '' as string,
    data: {} as any, // FIX
}

const slice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
            // debugger
            state.modalAction = ''
            state.data = {}
        },
        setModal: (state, action: PayloadAction<{ modalAction: string; data: any }>) => {
            // FIX
            state.data = action.payload.data
            state.modalAction = action.payload.modalAction
        },
    },
})

export const modalReducer = slice.reducer
export const modalActions = slice.actions
