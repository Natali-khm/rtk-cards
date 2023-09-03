import Box from '@mui/material/Box'

import { modalActions } from 'features/modals/modals.slice'
import { useModalsSelectors } from 'features/modals/hooks'
import { useAppDispatch, useAppForm } from 'common/hooks'
import { packsThunks } from 'features/packs/packs.slice'
import { SubmitHandler } from 'react-hook-form'
import { ModalsForm, CoverBox } from 'common/components'
import { useNavigate } from 'react-router-dom'
import { paths } from 'common/constants'
import { toast } from 'react-toastify'

export const DeletePackModal = () => {
    const { handleSubmit } = useAppForm([])

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const { id, packName, currPage, cover } = useModalsSelectors()

    const deletePack = () => {
        id &&
            dispatch(packsThunks.deletePack(id))
                .unwrap()
                .then((res) => {
                    toast.success(`'${packName}' pack is deleted`)

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
                <Box>{cover && <CoverBox alt="cover" src={cover} />}</Box>
                Do you really want to remove <b>"{packName}"</b> pack? All cards will be deleted.
            </Box>
        </ModalsForm>
    )
}
