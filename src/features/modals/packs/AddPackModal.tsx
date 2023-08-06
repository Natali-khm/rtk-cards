import { useAppForm } from '../../auth/hooks'
import { packsThunks } from '../../packs/packs.slice'
import { useAppDispatch } from '../../../common/hooks'
import { FormValidateType } from '../../auth/hooks/useAppForm'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { modalActions } from '../modals.slice'
import { useEffect } from 'react'
import { PackModal } from './PackModal'

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
    }, [formState, reset])

    return (
        <PackModal
            onSubmit={handleSubmit(addNewPack)}
            submitBtnTitle={'Add New Pack'}
            errors={errors}
            register={register}
        />
    )
}
