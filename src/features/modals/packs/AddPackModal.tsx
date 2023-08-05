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

export const AddPackModal = () => {
    const { register, handleSubmit, errors, reset, formState } = useAppForm(['textInput'])
    const dispatch = useAppDispatch()

    const addNewPack: SubmitHandler<FormValidateType> = (data) => {
        dispatch(packsThunks.addPack({ name: data.textInput, private: data.private }))
            .unwrap()
            .then((res) => {
                toast.success(`'${data.textInput}' pack is created`)
            })
        dispatch(modalActions.closeModal())
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ textInput: '' })
        }
    }, [formState, /* submittedData, */ reset])

    return (
        <ModalsForm onSubmit={handleSubmit(addNewPack)} btnTitle={'Add New Pack'}>
            <TextInput errors={errors} label="Name Pack" register={register} name={'textInput'} />
            <FormControlLabel
                label={'Private pack'}
                sx={{ mt: '30px', color: 'black' }}
                control={
                    <Checkbox
                        {...register('private')}
                        sx={{ color: '#00000099', '&.Mui-checked': { color: '#366EFF' } }}
                    />
                }
            />
        </ModalsForm>
    )
}
