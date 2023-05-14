import TextField from '@mui/material/TextField'
import { FC } from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { FormValidateType } from '../../../features/auth/components/register/Register'

type PropsType = {
    register?: UseFormRegister<FormValidateType> // FIX ?
    errorMessage?: string
}

export const EmailInput: FC<PropsType> = ({ register, errorMessage }) => {
    if (!register) return <div>#</div> // FIX

    return (
        <TextField
            type="text" // email
            label="Email"
            margin="normal"
            variant="standard"
            helperText={errorMessage}
            error={!!errorMessage}
            {...register('email')}
        />
    )
}
