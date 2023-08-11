import { useAppDispatch } from 'common/hooks'
import { modalActions } from '../../modals/modals.slice'
import { useCardsSelectors } from './useCardsSelectors'

export const useAddCard = () => {
    // const { packIdFromState } = useCardsSelectors()
    const dispatch = useAppDispatch()

    const addCard = (id: string) => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Add New Card', data: { id } }))
    }

    return { addCard }
}
