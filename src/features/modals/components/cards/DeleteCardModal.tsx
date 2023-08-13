import Box from '@mui/material/Box'

import { modalActions } from 'features/modals/modals.slice'
import { useModalsSelectors } from 'features/modals/hooks'
import { FormValidateType } from 'common/hooks/useAppForm'
import { useAppDispatch, useAppForm } from 'common/hooks'
import { cardsThunks } from 'features/cards/cards.slice'
import { SubmitHandler } from 'react-hook-form'
import { ModalsForm } from 'common/components'
import { toast } from 'react-toastify'

export const DeleteCardModal = () => {
    const { handleSubmit } = useAppForm([])
    const dispatch = useAppDispatch()
    const { id, name } = useModalsSelectors()

    const deleteCard: SubmitHandler<FormValidateType> = (data) => {
        id &&
            dispatch(cardsThunks.deleteCard(id))
                .unwrap()
                .then((res) => {
                    toast.success(`'${name}' card is deleted`)
                })
        dispatch(modalActions.closeModal())
    }

    return (
        <ModalsForm onSubmit={handleSubmit(deleteCard)} submitBtnTitle={'Delete Card'} btnColor="red">
            <Box sx={{ mb: '5px', textAlign: 'center' }}>
                Do you really want to remove <b>"{name}"</b> card?
            </Box>
        </ModalsForm>
    )
}
