import { TextInput } from 'common/components/inputs/TextInput'
import { useAppForm } from '../../auth/hooks'
import { ModalsForm } from '../ModalsForm'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { toast } from 'react-toastify'
import { useAppDispatch } from 'common/hooks'
import { cardsThunks } from '../../cards/cards.slice'
import { useModalsSelectors } from '../useModalsSelectors'
import { FormValidateType } from '../../auth/hooks/useAppForm'
import { SubmitHandler } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { modalActions } from '../modals.slice'

export const AddCardModal = () => {
    const { register, handleSubmit, errors, reset, formState } = useAppForm([])
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
    }, [formState, /* submittedData, */ reset])

    return (
        <ModalsForm onSubmit={handleSubmit(addCard)} btnTitle={'Add New Card'}>
            <Box sx={{ mb: '8px', color: '#949494' }}>
                Choose a question format
            </Box>

            <Select size="small" value={value} onChange={handleChange} fullWidth>
                <MenuItem value={'text'}>Text</MenuItem>
                <MenuItem value={'picture'}>Picture</MenuItem>
            </Select>

            <TextField
                size="small"
                type="text"
                label={'Question'}
                margin="normal"
                {...register('question')}
                fullWidth
            />
            <TextField size="small" type="text" label={'Answer'} margin="normal" {...register('answer')} fullWidth />
        </ModalsForm>
    )
}
