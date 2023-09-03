import TextField from '@mui/material/TextField'

import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FC } from 'react'
import { Inputs } from '../../hooks/useAppForm'

type PropsType = {
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
    defaultValue?: string
    label?: string
    name: 'textInput'
}

export const TextInput: FC<PropsType> = ({ register, errors, defaultValue, label, name }) => {
    return (
        <TextField
            fullWidth
            type="text"
            label={label}
            sx={{ height: '36px' }}
            margin="normal"
            variant="standard"
            {...register(name)}
            error={!!errors[name]}
            defaultValue={defaultValue}
            helperText={`${errors?.[name] ? errors[name]?.message : ''}`}
        />
    )
}
