import Box from '@mui/material/Box'

import { modalActions } from 'features/modals/modals.slice'
import { useModalsSelectors } from 'features/modals/hooks'
import { FormValidateType } from 'common/hooks/useAppForm'
import { useAppDispatch, useAppForm } from 'common/hooks'
import { packsThunks } from 'features/packs/packs.slice'
import { SubmitHandler } from 'react-hook-form'
import { ModalsForm } from 'common/components'
import { useNavigate } from 'react-router-dom'
import { paths } from 'common/constants'
import { toast } from 'react-toastify'

export const DeletePackModal = () => {
    const { handleSubmit } = useAppForm([])

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const { id, name, currPage } = useModalsSelectors()

    const deletePack: SubmitHandler<FormValidateType> = (data) => {
        id &&
            dispatch(packsThunks.deletePack(id))
                .unwrap()
                .then((res) => {
                    toast.success(`'${name}' pack is deleted`)

                    if (currPage === 'packs') {
                        dispatch(packsThunks.getPacks())
                    } else {
                        navigate(paths.PACKS)
                    }
                })
        dispatch(modalActions.closeModal())
    }

    return (
        <ModalsForm onSubmit={handleSubmit(deletePack)} submitBtnTitle={'Delete Pack'} btnColor="red">
            <Box sx={{ mb: '5px', textAlign: 'center' }}>
                Do you really want to remove <b>"{name}"</b> pack? All cards will be deleted.
            </Box>
        </ModalsForm>
    )
}
