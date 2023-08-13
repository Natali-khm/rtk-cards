import { SelectChangeEvent } from '@mui/material/Select'

import { modalActions } from 'features/modals/modals.slice'
import { FormValidateType } from 'common/hooks/useAppForm'
import { useModalsSelectors } from 'features/modals/hooks'
import { useAppDispatch, useAppForm } from 'common/hooks'
import { cardsThunks } from 'features/cards/cards.slice'
import { CardModal } from 'features/modals/components'
import { SubmitHandler } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const AddCardModal = () => {
    const { register, handleSubmit, reset, formState } = useAppForm([])
    const dispatch = useAppDispatch()
    const { id } = useModalsSelectors()

    const [value, setValue] = useState('text')

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string)
    }

    const addCard: SubmitHandler<FormValidateType> = (data) => {
        id &&
            dispatch(cardsThunks.addCard({ cardsPack_id: id, question: data.question, answer: data.answer }))
                .unwrap()
                .then((res) => {
                    toast.success(data.question ? `"${data.question}" card is created` : 'New card is created')
                })
        dispatch(modalActions.closeModal())
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ textInput: '' })
        }
    }, [formState, reset])

    return (
        <CardModal
            onSubmit={handleSubmit(addCard)}
            submitBtnTitle="Add New Card"
            selectValue={value}
            onChange={handleChange}
            register={register}
        />
    )
}
