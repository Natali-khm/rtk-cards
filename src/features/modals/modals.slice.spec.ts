import { ModalDataType, ModalsActionType, modalActions, modalReducer } from './modals.slice'

describe('modals reducer', () => {
    let initialState: any

    beforeEach(() => {
        const initialState = {
            isOpen: false,
            modalAction: null as ModalsActionType | null,
            data: {} as ModalDataType,
        }
    })

    it('should open modal', () => {
        const nextState = modalReducer(initialState, modalActions.openModal())
        expect(nextState.isOpen).toEqual(true)
    })

    it('should close modal', () => {
        const nextState = modalReducer(initialState, modalActions.closeModal())

        expect(nextState.isOpen).toEqual(false)
        expect(nextState.modalAction).toEqual(null)
        expect(nextState.data).toEqual({})
    })

    it('should correctly set modals data', () => {
        const modalAction = 'Add New Card'
        const data = {
            id: '123',
            currPage: 'cards',
            question: 'One of the SOLID principles',
            answer: 'Single Responsibility Principle',
        } as ModalDataType

        const nextState = modalReducer(initialState, modalActions.setModal({ modalAction, data }))
        expect(nextState.data).toEqual(data)
        expect(nextState.modalAction).toEqual(modalAction)
    })
})
