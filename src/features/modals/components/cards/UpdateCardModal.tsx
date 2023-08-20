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

    const { id, question, answer, questionImg, answerImg } = useModalsSelectors()

    const dispatch = useAppDispatch()

    const [questCover, setQuestCover] = useState(questionImg || '')
    const [ansCover, setAnsCover] = useState(answerImg || '')

    const updateCard: SubmitHandler<FormValidateType> = (data) => {
        id &&
            dispatch(
                cardsThunks.updateCard({
                    _id: id,
                    question: data.question,
                    answer: data.answer,
                    questionImg: questCover,
                    answerImg: ansCover,
                })
            )
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
            register={register}
            defQuestionValue={question}
            defAnswerValue={answer}
            questCover={questCover}
            setQuestCover={setQuestCover}
            ansCover={ansCover}
            setAnsCover={setAnsCover}
            selectValue={questionImg ? 'picture' : 'text'}
            readOnly={true}
        />
    )
}
