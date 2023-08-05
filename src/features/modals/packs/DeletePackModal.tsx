import React from 'react'
import { ModalsForm } from '../ModalsForm'
import { useAppForm } from '../../auth/hooks'
import { useAppDispatch } from '../../../common/hooks'
import { packsThunks } from '../../packs/packs.slice'
import { useModalsSelectors } from '../useModalsSelectors'
import { toast } from 'react-toastify'
import { FormValidateType } from '../../auth/hooks/useAppForm'
import { SubmitHandler } from 'react-hook-form'
import Box from '@mui/material/Box'

export const DeletePackModal = () => {
    const { register, handleSubmit, errors, reset, formState } = useAppForm([])
    const dispatch = useAppDispatch()
    const { id, name } = useModalsSelectors()

    const deletePack: SubmitHandler<FormValidateType> = (data) => {
        dispatch(packsThunks.deletePack(id))
            .unwrap()
            .then((res) => {
                toast.success(`'${name}' pack is deleted`)
            })
    }

    return (
        <ModalsForm onSubmit={handleSubmit(deletePack)} btnTitle={'Delete Pack'} btnColor='red'>
            <Box  sx={{ mb: '5px', textAlign: 'center'  }}>
                Do you really want to remove <b>"{name}"</b> pack? All cards will be deleted.
            </Box>
        </ModalsForm>
    )
}
