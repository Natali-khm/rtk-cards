import { SelectChangeEvent } from '@mui/material/Select'

import { useState } from 'react'
import { useAppForm } from '../../auth/hooks'
import { useModalsSelectors } from '../useModalsSelectors'
import { SubmitHandler } from 'react-hook-form'
import { FormValidateType } from '../../auth/hooks/useAppForm'
import { useAppDispatch } from '../../../common/hooks'
import { modalActions } from '../modals.slice'
import { toast } from 'react-toastify'
import { cardsThunks } from '../../cards/cards.slice'
import { CardModal } from './CardModal'

export const UpdateCardModal = () => {
    const { register, handleSubmit } = useAppForm([])
    const [value, setValue] = useState('text')
    const { id, question, answer } = useModalsSelectors()
    const dispatch = useAppDispatch()

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string)
    }

    const updateCard: SubmitHandler<FormValidateType> = (data) => {
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
