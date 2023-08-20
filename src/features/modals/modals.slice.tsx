import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
    modalAction: null as ModalsActionType | null,
    data: {} as ModalDataType,
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
            state.modalAction = null
            state.data = {}
        },
        setModal: (state, action: PayloadAction<{ modalAction: ModalsActionType; data: ModalDataType }>) => {
            state.data = action.payload.data
            state.modalAction = action.payload.modalAction
        },
    },
})

export const modalReducer = slice.reducer
export const modalActions = slice.actions

export type ModalDataType = {
    id?: string
    packName?: string
    private?: boolean
    currPage?: 'packs' | 'cards'
    question?: string
    answer?: string
    cover?: string
    questionImg?: string
    answerImg?: string
}

export type ModalsActionType =
    | 'Add New Pack'
    | 'Edit Pack'
    | 'Delete Pack'
    | 'Add New Card'
    | 'Edit Card'
    | 'Delete Card'
