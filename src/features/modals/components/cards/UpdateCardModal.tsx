import { SelectChangeEvent } from '@mui/material/Select'

import { modalActions } from 'features/modals/modals.slice'
import { useModalsSelectors } from 'features/modals/hooks'
import { FormValidateType } from 'common/hooks/useAppForm'
import { useAppDispatch, useAppForm } from 'common/hooks'
import { cardsThunks } from 'features/cards/cards.slice'
import { CardModal } from 'features/modals/components'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useState } from 'react'

export const UpdateCardModal = () => {
    const { register, handleSubmit } = useAppForm([])
    const [value, setValue] = useState('text')
    const { id, question, answer } = useModalsSelectors()
    const dispatch = useAppDispatch()

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string)
    }

    const updateCard: SubmitHandler<FormValidateType> = (data) => {
        id &&
            dispatch(cardsThunks.updateCard({ _id: id, question: data.question, answer: data.answer }))
                .unwrap()
                .then((res) => {
                    toast.success(data.question ? `"${data.question}" card is updated` : `The card is updated`)
                })
        dispatch(modalActions.closeModal())
    }

    return (
        <CardModal
            onSubmit={handleSubmit(updateCard)}
            submitBtnTitle="Save Changes"
            selectValue={value}
            onChange={handleChange}
            register={register}
            defQuestionValue={question}
            defAnswerValue={answer}
        />
    )
}
