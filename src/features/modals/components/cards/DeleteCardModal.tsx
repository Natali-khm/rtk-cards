import Box from '@mui/material/Box'

import { modalActions } from 'features/modals/modals.slice'
import { useModalsSelectors } from 'features/modals/hooks'
import { useAppDispatch, useAppForm } from 'common/hooks'
import { cardsThunks } from 'features/cards/cards.slice'
import { ModalsForm, CoverBox } from 'common/components'
import { toast } from 'react-toastify'

export const DeleteCardModal = () => {
    const { handleSubmit } = useAppForm([])

    const dispatch = useAppDispatch()

    const { id, questionImg, question } = useModalsSelectors()

    const deleteCard = () => {
        id &&
            dispatch(cardsThunks.deleteCard(id))
                .unwrap()
                .then(() => {
                    toast.success('The card is deleted')
                })
        dispatch(modalActions.closeModal())
    }

    return (
        <ModalsForm onSubmit={handleSubmit(deleteCard)} submitBtnTitle={'Delete Card'} btnColor="red">
            <Box sx={{ mb: '5px', textAlign: 'center' }}>
                {question && question !== 'no question' ? (
                    <Box>{question}</Box>
                ) : (
                    <CoverBox alt="question" src={questionImg || ''} />
                )}
                <Box sx={{ mt: '10px' }}>
                    <b>Do you really want to remove the card?</b>
                </Box>
            </Box>
        </ModalsForm>
    )
}
