import TextField from '@mui/material/TextField'

import { FormValidateType } from 'common/hooks/useAppForm'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FC } from 'react'

type PropsType = {
    register: UseFormRegister<FormValidateType>
    errors: FieldErrors<FormValidateType>
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
