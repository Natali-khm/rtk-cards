import { modalActions } from 'features/modals/modals.slice'
import { useModalsSelectors } from 'features/modals/hooks'
import { FormValidateType } from 'common/hooks/useAppForm'
import { useAppDispatch, useAppForm } from 'common/hooks'
import { cardsActions } from 'features/cards/cards.slice'
import { packsThunks } from 'features/packs/packs.slice'
import { PackModal } from 'features/modals/components'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

export const UpdatePackModal = () => {
    const { register, handleSubmit, errors } = useAppForm(['textInput'])

    const dispatch = useAppDispatch()

    const { id, name } = useModalsSelectors()

    const { partial } = useModalsSelectors()

    const updatePack: SubmitHandler<FormValidateType> = (data) => {
        id &&
            dispatch(packsThunks.updatePack({ _id: id, name: data.textInput, private: data.private }))
                .unwrap()
                .then((res) => {
                    toast.success(`'${data.textInput}' pack is updated`)
                })
        dispatch(modalActions.closeModal())
        dispatch(cardsActions.updatePack({ packName: data.textInput, privatePack: data.private }))
    }

    return (
        <PackModal
            onSubmit={handleSubmit(updatePack)}
            submitBtnTitle={'Save Changes'}
            errors={errors}
            register={register}
            defaultInputValue={name}
            privatePack={partial}
        />
    )
}
