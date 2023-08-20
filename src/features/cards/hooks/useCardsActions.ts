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

    const updateCard = (id: string, question: string, answer: string, questionImg: string, answerImg: string) => {
        dispatch(modalActions.openModal())
        dispatch(
            modalActions.setModal({ modalAction: 'Edit Card', data: { id, question, answer, questionImg, answerImg } })
        )
    }

    const deleteCard = (id: string, question: string, questionImg: string) => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Delete Card', data: { id, question, questionImg } }))
    }

    return { goToLearn, addCard, updateCard, deleteCard }
}
