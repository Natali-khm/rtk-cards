import React, { FC } from 'react'
import { ModalsForm } from '../../../common/components'
import Box from '@mui/material/Box'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import { UseFormRegister } from 'react-hook-form'
import { FormValidateType } from '../../../common/hooks/useAppForm'

type PropsType = {
    onSubmit: () => void
    submitBtnTitle: string
    selectValue: string
    onChange: (event: SelectChangeEvent) => void
    register: UseFormRegister<FormValidateType>
    defQuestionValue?: string
    defAnswerValue?: string
}

export const CardModal: FC<PropsType> = ({
    onSubmit,
    submitBtnTitle,
    selectValue,
    onChange,
    defQuestionValue,
    defAnswerValue,
    register,
}) => {
    return (
        <ModalsForm onSubmit={onSubmit} submitBtnTitle={submitBtnTitle}>
            <Box sx={{ mb: '8px', color: '#949494' }}>Choose a question format</Box>

            <Select fullWidth size="small" value={selectValue} onChange={onChange}>
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
                defaultValue={defQuestionValue}
            />
            <TextField
                fullWidth
                size="small"
                type="text"
                label={'Answer'}
                margin="normal"
                {...register('answer')}
                defaultValue={defAnswerValue}
            />
        </ModalsForm>
    )
}