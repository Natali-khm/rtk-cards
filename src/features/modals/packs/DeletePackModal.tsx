import Box from '@mui/material/Box'

import { useAppForm } from '../../auth/hooks'
import { useAppDispatch } from '../../../common/hooks'
import { packsThunks } from '../../packs/packs.slice'
import { useModalsSelectors } from '../useModalsSelectors'
import { toast } from 'react-toastify'
import { FormValidateType } from '../../../common/hooks/useAppForm'
import { SubmitHandler } from 'react-hook-form'
import { ModalsForm } from 'common/components'
import { modalActions } from '../modals.slice'
import { usePacksSelectors } from '../../packs/hooks'
import { paths } from '../../../common/constants'
import { useNavigate } from 'react-router-dom'

export const DeletePackModal = () => {
    const { handleSubmit } = useAppForm([])
    const dispatch = useAppDispatch()
    const { id, name, currPage } = useModalsSelectors()
    const navigate = useNavigate()

    const deletePack: SubmitHandler<FormValidateType> = (data) => {
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
