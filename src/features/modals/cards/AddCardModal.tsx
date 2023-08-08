import { SelectChangeEvent } from '@mui/material/Select'

import { useAppForm } from '../../auth/hooks'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useAppDispatch } from 'common/hooks'
import { cardsThunks } from '../../cards/cards.slice'
import { useModalsSelectors } from '../useModalsSelectors'
import { FormValidateType } from '../../../common/hooks/useAppForm'
import { SubmitHandler } from 'react-hook-form'
import { modalActions } from '../modals.slice'
import { CardModal } from './CardModal'

export const AddCardModal = () => {
    const { register, handleSubmit, reset, formState } = useAppForm([])
    const dispatch = useAppDispatch()
    const { id } = useModalsSelectors()

    const [value, setValue] = useState('text')

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string)
    }

    const addCard: SubmitHandler<FormValidateType> = (data) => {
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
