import Box from '@mui/material/Box'

import { ModalsForm } from 'common/components'
import { useAppDispatch } from 'common/hooks'
import { SubmitHandler } from 'react-hook-form'
import { useModalsSelectors } from '../useModalsSelectors'
import { useAppForm } from '../../auth/hooks'
import { FormValidateType } from 'common/hooks/useAppForm'
import { toast } from 'react-toastify'
import { cardsActions, cardsThunks } from '../../cards/cards.slice'
import { modalActions } from '../modals.slice'

export const DeleteCardModal = () => {
    const { register, handleSubmit, errors, reset, formState } = useAppForm([])
    const dispatch = useAppDispatch()
    const { id, name } = useModalsSelectors()

    const deleteCard: SubmitHandler<FormValidateType> = (data) => {
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
