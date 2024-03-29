import TextField from '@mui/material/TextField'

import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { Inputs } from 'common/hooks/useAppForm'
import { FC } from 'react'

type PropsType = {
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
    defaultValue?: string
}

export const EmailInput: FC<PropsType> = ({ register, errors, defaultValue }) => {
    return (
        <TextField
            type="email"
            label="Email"
            margin="normal"
            variant="standard"
            {...register('email')}
            error={!!errors.email}
            defaultValue={defaultValue}
            helperText={`${errors.email ? errors.email?.message : ''}`}
        />
    )
}
