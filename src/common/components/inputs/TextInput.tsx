import TextField from '@mui/material/TextField'

import { FormFieldsType, FormValidateType } from 'features/auth/hooks/useAppForm'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FC } from 'react'

type PropsType = {
    register: UseFormRegister<FormValidateType>
    errors: FieldErrors<FormValidateType>
    defaultValue?: string
    label?: string
    name: FormFieldsType
}

export const TextInput: FC<PropsType> = ({ register, errors, defaultValue, label, name }) => {
    return (
        <TextField
            fullWidth
            type="text"
            label={label}
            sx={{height: '36px'}}
            margin="normal"
            variant="standard"
            {...register(name)}
            error={!!errors[name]}
            defaultValue={defaultValue}
            helperText={`${errors?.[name] ? errors[name]?.message : ''}`}
        />
    )
}
