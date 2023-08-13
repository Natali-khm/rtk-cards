import { modalActions } from 'features/modals/modals.slice'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'common/hooks'

export const useCardsActions = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const goToLearn = (id: string) => {
        navigate(`/learn/${id}`)
    }

    const addCard = (id: string) => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Add New Card', data: { id } }))
    }

    const updateCard = (id: string, question: string, answer: string) => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Edit Card', data: { id, question, answer } }))
    }

    const deleteCard = (id: string, name: string) => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Delete Card', data: { id, name } }))
    }

    return { goToLearn, addCard, updateCard, deleteCard }
}
