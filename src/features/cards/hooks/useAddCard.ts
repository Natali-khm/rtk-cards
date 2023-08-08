import { useAppDispatch } from 'common/hooks'
import { modalActions } from '../../modals/modals.slice'
import { useCardsSelectors } from './useCardsSelectors'

export const useAddCard = () => {
    const { packId } = useCardsSelectors()
    const dispatch = useAppDispatch()

    const addCard = () => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Add New Card', data: { id: packId } }))
    }

    return { addCard }
}
