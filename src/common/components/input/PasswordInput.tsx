import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { FormValidateType } from '../../../features/auth/hooks/useAppForm'

type PropsType = {
    label: string
    defaultValue?: string
    name: 'password' | 'confirmPassword'
    errors: FieldErrors<FormValidateType>
    register: UseFormRegister<FormValidateType>
}

export const PasswordInput = ({ register, name, defaultValue, label, errors }: PropsType) => {
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show)

    return (
        <Box sx={{ mt: 3 }}>
            <FormControl variant="standard" fullWidth>
                <TextField
                    variant="standard"
                    defaultValue={defaultValue}
                    {...register(name)}
                    id="input-with-icon-password"
                    type={showPassword ? 'text' : 'password'}
                    label={label}
                    helperText={`${errors[name] ? errors[name]?.message : ''}`}
                    error={!!errors[name]}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    sx={{ color: '#000' }}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>
        </Box>
    )
}
