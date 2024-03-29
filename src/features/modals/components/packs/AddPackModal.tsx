import { Inputs, useAppForm } from 'common/hooks/useAppForm'
import { modalActions } from 'features/modals/modals.slice'
import { packsThunks } from 'features/packs/packs.slice'
import { PackModal } from 'features/modals/components'
import { SubmitHandler } from 'react-hook-form'
import { useAppDispatch } from 'common/hooks'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const AddPackModal = () => {
    const { register, handleSubmit, errors, reset, formState } = useAppForm([])

    const dispatch = useAppDispatch()

    const [photo, setPhoto] = useState('')

    const addNewPack: SubmitHandler<Inputs> = (data) => {
        dispatch(packsThunks.addPack({ name: data.textInput, private: data.private, deckCover: photo }))
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
            cover={photo}
            setPhoto={setPhoto}
        />
    )
}
