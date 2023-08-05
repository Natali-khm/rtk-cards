import { EmailInput } from '../../../common/components'
import { TextInput } from '../../../common/components/inputs/TextInput'
import { useAppForm } from '../../auth/hooks'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { ModalsForm } from '../ModalsForm'
import { packsThunks } from '../../packs/packs.slice'
import { useAppDispatch } from '../../../common/hooks'
import { FormValidateType } from '../../auth/hooks/useAppForm'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { modalActions } from '../modals.slice'
import { useEffect } from 'react'
import { useModalsSelectors } from '../useModalsSelectors'

export const UpdatePackModal = () => {
    const { register, handleSubmit, errors, reset, formState } = useAppForm(['textInput'])
    const dispatch = useAppDispatch()

    const { id, name, partial } = useModalsSelectors()

    const updatePack: SubmitHandler<FormValidateType> = (data) => {
        dispatch(packsThunks.updatePack({ _id: id, name: data.textInput, private: data.private }))
            .unwrap()
            .then((res) => {
                toast.success(`'${data.textInput}' pack is updated`)
            })
        dispatch(modalActions.closeModal())
    }

    return (
        <ModalsForm onSubmit={handleSubmit(updatePack)} btnTitle={'Save Changes'}>
            <TextInput errors={errors} defaultValue={name} label='updatePack' register={register} name={'textInput'}/>
            <FormControlLabel
                label={'Private pack'}
                sx={{ mt: '20px', color: 'black' }}
                control={
                    <Checkbox
                        {...register('private')}
                        defaultChecked={partial}
                        sx={{ color: '#00000099', '&.Mui-checked': { color: '#366EFF' } }}
                    />
                }
            />
        </ModalsForm>
    )
}
