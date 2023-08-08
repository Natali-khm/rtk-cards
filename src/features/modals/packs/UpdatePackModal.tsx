import { useAppForm } from '../../auth/hooks'
import { packsThunks } from '../../packs/packs.slice'
import { useAppDispatch } from '../../../common/hooks'
import { FormValidateType } from '../../../common/hooks/useAppForm'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { modalActions } from '../modals.slice'
import { useModalsSelectors } from '../useModalsSelectors'
import { PackModal } from './PackModal'

export const UpdatePackModal = () => {
    const { register, handleSubmit, errors } = useAppForm(['textInput'])
    const dispatch = useAppDispatch()

    const { id, name } = useModalsSelectors()

    const updatePack: SubmitHandler<FormValidateType> = (data) => {
        dispatch(packsThunks.updatePack({ _id: id, name: data.textInput, private: data.private }))
            .unwrap()
            .then((res) => {
                toast.success(`'${data.textInput}' pack is updated`)
            })
        dispatch(modalActions.closeModal())
    }

    return (
        <PackModal
            onSubmit={handleSubmit(updatePack)}
            submitBtnTitle={'Save Changes'}
            errors={errors}
            register={register}
            defaultInputValue={name}
        />
    )
}
