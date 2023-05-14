import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { UseFormRegister } from 'react-hook-form'
import { FormValidateType } from '../../../features/auth/components/register/Register'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

type PropsType = {
    register?: UseFormRegister<FormValidateType> // FIX ?
    name: 'password' | 'confirmPassword'
    defaultValue?: string
    label: string
    errorMessage: string
}

export const PasswordInput = ({ register, name, defaultValue, label, errorMessage }: PropsType) => {
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    if (!register) {
        return <div>d</div>
    } // FIX

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
                    helperText={errorMessage}
                    error={!!errorMessage}
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

// {...register(name, {
//     required: true,
//     minLength: { value: 8, message: 'Password must be at least 8 characters' },
// })}
