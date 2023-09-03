import VisibilityOff from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { useState } from 'react'
import { Inputs } from '../../hooks/useAppForm'

type PropsType = {
    label: string
    defaultValue?: string
    name: 'password' | 'confirmPassword'
    errors: FieldErrors<Inputs>
    register: UseFormRegister<Inputs>
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
