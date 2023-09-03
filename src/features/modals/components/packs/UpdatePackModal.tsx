import { Inputs, useAppForm } from 'common/hooks/useAppForm'
import { modalActions } from 'features/modals/modals.slice'
import { useModalsSelectors } from 'features/modals/hooks'
import { cardsActions } from 'features/cards/cards.slice'
import { packsThunks } from 'features/packs/packs.slice'
import { PackModal } from 'features/modals/components'
import { SubmitHandler } from 'react-hook-form'
import { useAppDispatch } from 'common/hooks'
import { toast } from 'react-toastify'
import { useState } from 'react'

export const UpdatePackModal = () => {
    const { register, handleSubmit, errors } = useAppForm([])

    const dispatch = useAppDispatch()

    const { id, packName, partial, cover } = useModalsSelectors()

    const [photo, setPhoto] = useState(cover || '')

    const updatePack: SubmitHandler<Inputs> = (data) => {
        id &&
            dispatch(packsThunks.updatePack({ _id: id, name: data.textInput, private: data.private, deckCover: photo }))
                .unwrap()
                .then((res) => {
                    toast.success(`'${data.textInput}' pack is updated`)
                })
        dispatch(modalActions.closeModal())
        dispatch(cardsActions.updatePack({ packName: data.textInput, privatePack: data.private, cover: photo }))
    }

    return (
        <PackModal
            onSubmit={handleSubmit(updatePack)}
            submitBtnTitle={'Save Changes'}
            errors={errors}
            register={register}
            defaultInputValue={packName}
            privatePack={partial}
            cover={photo}
            setPhoto={setPhoto}
        />
    )
}
