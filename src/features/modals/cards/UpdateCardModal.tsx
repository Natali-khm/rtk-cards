import React, { useState } from 'react'
import { ModalsForm } from '../ModalsForm'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { useAppForm } from '../../auth/hooks'
import { useModalsSelectors } from '../useModalsSelectors'
import { SubmitHandler } from 'react-hook-form'
import { FormValidateType } from '../../auth/hooks/useAppForm'
import { useAppDispatch } from '../../../common/hooks'
import { modalActions } from '../modals.slice'
import { toast } from 'react-toastify'
import { cardsThunks } from '../../cards/cards.slice'

export const UpdateCardModal = () => {
    const { register, handleSubmit, errors, reset, formState } = useAppForm([])
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
        <ModalsForm onSubmit={handleSubmit(updateCard)} btnTitle={'Save Changes'}>
            <Box  sx={{  mb: '8px' , color: '#949494' }}>Choose a question format</Box>

            <Select fullWidth size="small" value={value} onChange={handleChange}>
                <MenuItem value={'text'}>Text</MenuItem>
                <MenuItem value={'picture'}>Picture</MenuItem>
            </Select>

            <TextField
                fullWidth
                size="small"
                type="text"
                label={'Question'}
                margin="normal"
                {...register('question')}
                defaultValue={question}
            />
            <TextField
                fullWidth
                size="small"
                type="text"
                label={'Answer'}
                margin="normal"
                {...register('answer')}
                defaultValue={answer}
            />
        </ModalsForm>
    )
}
